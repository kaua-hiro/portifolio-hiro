import React from 'react';
import {useEffect, useState} from 'react';

import './ScrollToTop.css';

const ScrollToTop = () => {
    const [backToTopButtom, setBackTopButton]= useState(false);

    useEffect(() => {
        const onScroll = () => setBackTopButton(window.scrollY > 100);
        window.addEventListener("scroll", onScroll, { passive: true });
        // Remove o listener ao trocar de página (antes ele vazava a cada navegação)
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return <div className='App'>
            {backToTopButtom && (
                <button className='cm-up' onClick={scrollUp} aria-label="Voltar ao topo">
                    <span className="cm-icon" aria-hidden="true">
                        <i className="fas fa-chevron-up"></i>
                    </span>
                </button>
            )}
    </div>
};

export default React.memo(ScrollToTop);
