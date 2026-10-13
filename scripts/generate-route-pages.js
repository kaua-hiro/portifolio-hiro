/*
 * Pós-build: o GitHub Pages só serve arquivos que existem. Sem isto, /about
 * cairia no 404.html e responderia HTTP 404 — e o Google não indexa páginas 404.
 * Aqui criamos build/<rota>/index.html (status 200) com os metadados próprios
 * de cada rota, e um 404.html que carrega o app para qualquer outro caminho.
 */
const fs = require('fs')
const path = require('path')
const pages = require('../src/seo/pages.json')

const SITE_URL = 'https://kaua-hiro.github.io/portifolio-hiro'
const buildDir = path.join(__dirname, '..', 'build')
const template = fs.readFileSync(path.join(buildDir, 'index.html'), 'utf8')

const escapeHtml = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

function render(route, { title, description }) {
    const url = `${SITE_URL}${route === '/' ? '/' : route}`
    const t = escapeHtml(title)
    const d = escapeHtml(description)
    return template
        .replace(/<title>[^<]*<\/title>/, `<title>${t}</title>`)
        .replace(/(<meta name="description" content=")[^"]*(")/, `$1${d}$2`)
        .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
        .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${t}$2`)
        .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${d}$2`)
        .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
        .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${t}$2`)
        .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${d}$2`)
}

try {
    for (const [route, meta] of Object.entries(pages)) {
        const dir = route === '/' ? buildDir : path.join(buildDir, route)
        fs.mkdirSync(dir, { recursive: true })
        fs.writeFileSync(path.join(dir, 'index.html'), render(route, meta))
        console.log(`[seo] ${route} -> ${path.relative(buildDir, path.join(dir, 'index.html'))}`)
    }
    fs.writeFileSync(path.join(buildDir, '404.html'), render('/', pages['/']).replace(/(<meta name="robots" content=")[^"]*(")/, '$1noindex$2'))
    console.log('[seo] 404.html gerado')
} catch (err) {
    console.error('[seo] Falha ao gerar páginas de rota:', err)
    process.exit(1)
}
