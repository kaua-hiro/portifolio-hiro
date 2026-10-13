import React, { useContext, useEffect, useState } from "react";
import './Header.css';
/* ReactScroll */
import { Link } from 'react-scroll';

/* React router */
import { NavLink } from 'react-router-dom';

/* DarkMode */
import DarkMode from '../DarkMode/DarkMode';

/* Language */
import { FormattedMessage } from "react-intl";
import { langContext } from '../../context/Context';

const Header = () => {
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

            <NavLink className="logo" to="/">
                <p><span>Kaua Hiro Mizumoto</span></p>
            </NavLink>

            <nav id="site-navbar" className={`navbar ${menuOpen ? "activar" : ""}`} aria-label="Navegação principal">
                <Link to="inicio" spy={true} offset={-150} href="#inicio">
                    <FormattedMessage
                        id='home'
                        defaultMessage='Home'
                    />
                </Link>
                <Link to="sobre-mi" spy={true} offset={-150} href="#sobre-mi">
                    <FormattedMessage
                        id='about'
                        defaultMessage='About me'
                    />
                </Link>
                <Link to="servicios" spy={true} offset={-150} href="#servicios">
                    <FormattedMessage
                        id='services'
                        defaultMessage='Services'
                    />
                </Link>
                
                {/*<Link to="proyectos" spy={true} offset={-150} href="#proyectos">
                    <FormattedMessage
                        id='projects'
                        defaultMessage='Projects'
                    />
                </Link>*/}
                <Link to="contactos" spy={true} offset={-150} href="#contactos">
                    <FormattedMessage
                        id='contact'
                        defaultMessage='Contact'
                    />
                </Link>
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

export default React.memo(Header);