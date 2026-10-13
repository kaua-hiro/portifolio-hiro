import React, {useEffect, useState} from 'react';
import MensajeIngles from './../language/en.json';
import MensajePortugues from './../language/pt.json';
import {IntlProvider} from 'react-intl';

const langContext = React.createContext();

const LangProvider = ({children}) => {
    let localePorDefecto;
    let mensajesPorDefecto;
    let lang = null;
    try {
        lang = localStorage.getItem('lang');
    } catch (err) {
        // localStorage indisponível: usa o idioma padrão
    }

    if(lang){
        localePorDefecto = lang;

        if(lang === 'pt-BR'){
            mensajesPorDefecto = MensajePortugues;
        } else if(lang === 'en-US'){
            mensajesPorDefecto = MensajeIngles;
        } else {
            localePorDefecto = 'pt-BR';
            mensajesPorDefecto = MensajePortugues;
        }
    } else {
        localePorDefecto = 'pt-BR';
        mensajesPorDefecto = MensajePortugues;
    }

    const [mensaje, setMensaje] = useState(mensajesPorDefecto);
    const [locale, setLocale] = useState(localePorDefecto);

    // Leitores de tela, tradutor do navegador e buscadores leem o idioma daqui
    useEffect(() => {
        document.documentElement.lang = locale;
    }, [locale]);

    const selectLanguage = (language) =>{
        switch (language) {
            case 'pt-BR':
                setMensaje(MensajePortugues);
                setLocale('pt-BR');
                try { localStorage.setItem('lang', 'pt-BR'); } catch (err) { /* sem persistência */ }
                break;
            case 'en-US':
                setMensaje(MensajeIngles);
                setLocale('en-US');
                try { localStorage.setItem('lang', 'en-US'); } catch (err) { /* sem persistência */ }
                break;
            default:
                setMensaje(MensajePortugues);
                setLocale('pt-BR');
                try { localStorage.setItem('lang', 'pt-BR'); } catch (err) { /* sem persistência */ }
        }
    }

    return (
        <langContext.Provider value={{selectLanguage: selectLanguage}}>
            <IntlProvider locale={locale} messages={mensaje}>
                {children}
            </IntlProvider>
        </langContext.Provider>
    );
};

export {LangProvider, langContext};
