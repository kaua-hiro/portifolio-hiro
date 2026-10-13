import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import pages from './pages.json'

const SITE_URL = 'https://kaua-hiro.github.io/portifolio-hiro'

const setMeta = (selector, attr, value) => {
    const el = document.querySelector(selector)
    if (el) el.setAttribute(attr, value)
}

/*
 * Atualiza título, descrição e canonical a cada troca de rota.
 * O HTML estático de cada rota já sai certo do build (scripts/generate-route-pages.js);
 * isto mantém a página coerente quando a navegação acontece dentro do React.
 */
export default function RouteSeo() {
    const { pathname } = useLocation()

    useEffect(() => {
        const page = pages[pathname] || pages['/']
        const url = `${SITE_URL}${pathname === '/' ? '/' : pathname}`

        document.title = page.title
        setMeta('meta[name="description"]', 'content', page.description)
        setMeta('link[rel="canonical"]', 'href', url)
        setMeta('meta[property="og:title"]', 'content', page.title)
        setMeta('meta[property="og:description"]', 'content', page.description)
        setMeta('meta[property="og:url"]', 'content', url)
    }, [pathname])

    return null
}
