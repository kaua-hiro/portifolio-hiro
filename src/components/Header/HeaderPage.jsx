import React, { useContext, useEffect, useState } from "react";
import './Header.css';

/* React router */
import { NavLink } from 'react-router-dom';

/* DarkMode */
import DarkMode from '../DarkMode/DarkMode';

/* Language */
import { FormattedMessage } from "react-intl";
import { langContext } from '../../context/Context';

const HeaderPage = () => {
    // Buttom language
    const idioma = useContext(langContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Header "ativo" ao rolar + fecha o menu mobile. Antes isto só era
    // registrado depois do primeiro clique no menu.
    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 0);
            setMenuOpen(false);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className={`site-header ${scrolled ? "activar" : ""}`}>
            <button
                type="button"
                id="menu-btn"
                className="fas fa-bars"
                aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={menuOpen}
                aria-controls="site-navbar"
                onClick={() => setMenuOpen((o) => !o)}
            ></button>

            <NavLink className="logo" to="/" >
                <p><span>Kaua Hiro Mizumoto</span></p>
            </NavLink>

            <nav id="site-navbar" className={`navbar ${menuOpen ? "activar" : ""}`} aria-label="Navegação principal">
                <NavLink to="/" offset={-150} duration={500}>
                    <FormattedMessage
                        id='home'
                        defaultMessage='Home'
                    />
                </NavLink>
                <NavLink to="/about" offset={-150} duration={500}>
                    <FormattedMessage
                        id='about'
                        defaultMessage='About me'
                    />
                </NavLink>
                <NavLink to="/service" offset={-150} duration={500}>
                    <FormattedMessage
                        id='services'
                        defaultMessage='Services'
                    />
                </NavLink>
                {/*<NavLink to="/project" offset={-150} duration={500}>
                    <FormattedMessage
                        id='projects'
                        defaultMessage='Projects'
                    />
                </NavLink>*/}
                <div id="buttons">
                    <button type="button" className="lang-btn" onClick={() => idioma.selectLanguage('en-US')} aria-label="Switch to English" lang="en">
                        <img src="https://flagcdn.com/us.svg" alt="" width="30" height="20" />
                    </button>
                    <button type="button" className="lang-btn" onClick={() => idioma.selectLanguage('pt-BR')} aria-label="Mudar para português" lang="pt-BR">
                        <img src="https://flagcdn.com/br.svg" alt="" width="30" height="20" />
                    </button>
                </div>
            </nav>
            <div className="switch" id="switch">
                <DarkMode />
            </div>
        </header>
    )
}

export default React.memo(HeaderPage);