import React, { useEffect, useState } from 'react';
import './DarkMode.css'
import { asButton } from '../../utils/a11y';

const getInitialTheme = () => {
    try {
        const saved = localStorage.getItem('theme');
        if (saved === 'light' || saved === 'dark') return saved;
    } catch (err) {
        // localStorage bloqueado (aba anônima / cookies desativados): segue com o padrão
    }
    return 'dark';
};

const DarkMode = () => {
    const [theme, setTheme] = useState(getInitialTheme);

    // Efeito colateral no <body> fica no useEffect, não durante o render
    useEffect(() => {
        document.body.classList.remove('light', 'dark');
        document.body.classList.add(theme);
        try {
            localStorage.setItem('theme', theme);
        } catch (err) {
            // sem persistência, mas o tema funciona na sessão
        }
    }, [theme]);

    const switchTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

    return (
        <div>
            <div
                className={theme === 'dark' ? 'clicked' : ''}
                id="darkMode"
                aria-pressed={theme === 'dark'}
                {...asButton(switchTheme, theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro')}
            >
                <span aria-hidden="true"><i className="fas fa-sun"></i></span>
                <span aria-hidden="true"><i className="fas fa-moon"></i></span>
            </div>
        </div>
    );
};

export default DarkMode;
