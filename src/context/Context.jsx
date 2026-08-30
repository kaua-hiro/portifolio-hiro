import React, {useState} from 'react';
import MensajeIngles from './../language/en.json';
import MensajePortugues from './../language/pt.json';
import {IntlProvider} from 'react-intl';

const langContext = React.createContext();

const LangProvider = ({children}) => {
    let localePorDefecto;
    let mensajesPorDefecto;
    const lang = localStorage.getItem('lang');

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

    const selectLanguage = (language) =>{
        switch (language) {
            case 'pt-BR':
                setMensaje(MensajePortugues);
                setLocale('pt-BR');
                localStorage.setItem('lang', 'pt-BR');
                break;
            case 'en-US':
                setMensaje(MensajeIngles);
                setLocale('en-US');
                localStorage.setItem('lang', 'en-US');
                break;
            default:
                setMensaje(MensajePortugues);
                setLocale('pt-BR');
                localStorage.setItem('lang', 'pt-BR');
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
