import React, { useState, useEffect } from 'react';
import {
    Route,
    Routes,
} from "react-router-dom";
import './App.css';

/* Pages */
import Home from "./pages/Home/HomePage";
import About from "./pages/About/AboutPage";
import Services from "./pages/Service/ServicesPage";

import RouterScrollTop from "./components/ScrollToTop/RouterScrollTop"
import SpiralLoader from "./components/SpiralLoader/SpiralLoader"
import RouteSeo from "./seo/RouteSeo"

const LOADER_DURATION_MS = 4000
const LOADER_SEEN_KEY = 'spiral-loader-seen'
const BOT_UA = /bot|crawl|spider|slurp|lighthouse|facebookexternalhit|whatsapp|linkedin|discord|telegram|preview/i

function shouldShowLoader() {
    try {
        if (BOT_UA.test(navigator.userAgent)) return false
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
        if (sessionStorage.getItem(LOADER_SEEN_KEY)) return false
    } catch (err) {
        // sessionStorage bloqueado: mostra o loader normalmente
    }
    return true
}

function App() {
    // A animação de abertura aparece 1x por sessão. Não aparece para quem pediu
    // menos movimento no sistema nem para robôs de busca/preview de links,
    // para que o conteúdo fique visível imediatamente para eles.
    const [loading, setLoading] = useState(shouldShowLoader);

    useEffect(() => {
        if (!loading) return undefined
        try { sessionStorage.setItem(LOADER_SEEN_KEY, '1') } catch (err) { /* ok */ }
        const timer = setTimeout(() => setLoading(false), LOADER_DURATION_MS)
        return () => clearTimeout(timer)
    }, [loading])

    return (
        <>
            <RouterScrollTop />
            <RouteSeo />
            {
                loading ?

                    <SpiralLoader onSkip={() => setLoading(false)} />

                    :

                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route exact path="/about" element={<About />}></Route>
                        <Route exact path="/service" element={<Services />}></Route>
                    </Routes>

            }

        </>
    )
}

export default App
