/*
 * Pós-build: o GitHub Pages só serve arquivos que existem. Sem isto, /about
 * cairia no 404.html e responderia HTTP 404 — e o Google não indexa páginas 404.
 * Aqui criamos build/<rota>/index.html (status 200) com, para cada rota:
 *  - título, descrição, canonical e Open Graph próprios
 *  - dados estruturados (lista de projetos na home, breadcrumb nas internas)
 *  - conteúdo estático no <noscript> para robôs que não executam JavaScript
 *    (Bing, prévias de link do LinkedIn/WhatsApp/Discord)
 * E um 404.html (noindex) que carrega o app para qualquer outro caminho.
 */
const fs = require('fs')
const path = require('path')
const pages = require('../src/seo/pages.json')
const projects = require('../src/seo/projects.json')

const SITE_URL = 'https://kaua-hiro.github.io/portifolio-hiro'
const PERSON_ID = `${SITE_URL}/#person`
const GITHUB = 'https://github.com/kaua-hiro'
const LINKEDIN = 'https://www.linkedin.com/in/kauamizumoto/'
const MARKER = '<meta name="seo-generated" content="1"/>'

const buildDir = path.join(__dirname, '..', 'build')
const template = fs.readFileSync(path.join(buildDir, 'index.html'), 'utf8')

const escapeHtml = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
const urlFor = (route) => `${SITE_URL}${route === '/' ? '/' : `${route}/`}`
// "</" dentro de JSON-LD fecharia a tag <script> antes da hora
const jsonLd = (data) => `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`
const shortTitle = (page) => page.title.split(' |')[0]

function structuredData(route, page) {
    if (route === '/') {
        return {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Projetos de Kauã Hiro Mizumoto',
            itemListElement: projects.map((p, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                item: {
                    '@type': 'SoftwareSourceCode',
                    name: p.name,
                    description: p.description,
                    keywords: p.tech.join(', '),
                    author: { '@id': PERSON_ID },
                    ...(p.repo && { codeRepository: p.repo }),
                    ...((p.demo || p.repo) && { url: p.demo || p.repo }),
                },
            })),
        }
    }
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Início', item: urlFor('/') },
            { '@type': 'ListItem', position: 2, name: shortTitle(page), item: urlFor(route) },
        ],
    }
}

function noscriptContent(page) {
    const nav = Object.keys(pages)
        .map((r) => `<a href="${urlFor(r)}">${escapeHtml(shortTitle(pages[r]))}</a>`)
        .join(' · ')
    const list = projects
        .map((p) => {
            const links = [p.demo && `<a href="${p.demo}">demo</a>`, p.repo && `<a href="${p.repo}">código</a>`]
                .filter(Boolean)
                .join(' · ')
            return `<li><strong>${escapeHtml(p.name)}</strong> — ${escapeHtml(p.description)} (${escapeHtml(p.tech.join(', '))})${links ? ` — ${links}` : ''}</li>`
        })
        .join('')
    return `<noscript>
      <header><h1>${escapeHtml(shortTitle(page))}</h1><nav>${nav}</nav></header>
      <p>${escapeHtml(page.description)}</p>
      <h2>Projetos</h2><ul>${list}</ul>
      <h2>Contato</h2>
      <p><a href="${GITHUB}">GitHub: github.com/kaua-hiro</a> · <a href="${LINKEDIN}">LinkedIn: linkedin.com/in/kauamizumoto</a> · <a href="mailto:kauahiro2004@hotmail.com">kauahiro2004@hotmail.com</a></p>
      <p>Ative o JavaScript para ver o portfólio interativo.</p>
    </noscript>`
}

function render(route, page) {
    const url = urlFor(route)
    const t = escapeHtml(page.title)
    const d = escapeHtml(page.description)
    const headExtra = [
        MARKER,
        `<link rel="alternate" hreflang="pt-BR" href="${url}"/>`,
        `<link rel="alternate" hreflang="x-default" href="${url}"/>`,
        jsonLd(structuredData(route, page)),
    ].join('')

    return template
        .replace(/<title>[^<]*<\/title>/, `<title>${t}</title>`)
        .replace(/(<meta name="description" content=")[^"]*(")/, `$1${d}$2`)
        .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
        .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${t}$2`)
        .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${d}$2`)
        .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
        .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${t}$2`)
        .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${d}$2`)
        .replace(/<noscript>[\s\S]*?<\/noscript>/, noscriptContent(page))
        .replace('</head>', `${headExtra}</head>`)
}

try {
    // build/index.html é sobrescrito abaixo; rodar de novo sem rebuild duplicaria as tags
    if (template.includes(MARKER)) {
        throw new Error('build/index.html já foi processado. Rode "npm run build" de novo.')
    }
    for (const [route, meta] of Object.entries(pages)) {
        const dir = route === '/' ? buildDir : path.join(buildDir, route)
        fs.mkdirSync(dir, { recursive: true })
        fs.writeFileSync(path.join(dir, 'index.html'), render(route, meta))
        console.log(`[seo] ${route} -> ${path.relative(buildDir, path.join(dir, 'index.html'))}`)
    }
    const notFound = render('/', pages['/']).replace(/(<meta name="robots" content=")[^"]*(")/, '$1noindex$2')
    fs.writeFileSync(path.join(buildDir, '404.html'), notFound)
    console.log('[seo] 404.html gerado')
} catch (err) {
    console.error('[seo] Falha ao gerar páginas de rota:', err.message)
    process.exit(1)
}
