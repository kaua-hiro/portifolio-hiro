import React from 'react';
import '../../pages/Service/ServicesPage.css'
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const Service = () => (
    <section className="servicios" id="servicios">
        <h2 className="heading">
            <FormattedMessage
                id='services'
                defaultMessage='Especialidades'
            />
        </h2>
        <div className="row">
            <div className="columns" data-aos="fade-up" data-aos-delay="200">
                <i className="fas fa-code"></i>
                <h3>
                    <FormattedMessage
                        id='optimization'
                        defaultMessage='IA Estratégica para Negócios'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='optimization-info'
                        defaultMessage='Planejamento e implementação de roteiros de Inteligência Artificial corporativa para alavancar a produtividade e os resultados do negócio.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="300">
                <i className="fas fa-robot"></i>
                <h3>
                    <FormattedMessage
                        id='development'
                        defaultMessage='Agentes de IA & Copilotos'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='development-info'
                        defaultMessage='Criação de assistentes virtuais inteligentes (LLMs) e chatbots com Microsoft Copilot Studio para automação de suporte técnico e atendimento.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="400">
                <i className="fas fa-cogs"></i>
                <h3>
                    <FormattedMessage
                        id='marketing'
                        defaultMessage='Automação de Processos (RPA)'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='marketing-info'
                        defaultMessage='Automação de fluxos corporativos, relatórios fiscais e tarefas manuais críticas utilizando Power Automate e scripts em Python.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="500">
                <i className="fas fa-network-wired"></i>
                <h3>
                    <FormattedMessage
                        id='maintenance'
                        defaultMessage='Integração de APIs e Sistemas'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='maintenance-info'
                        defaultMessage='Conexão de ponta a ponta entre plataformas, ERPs, bancos de dados e serviços web, garantindo sincronização e dados em tempo real.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="600">
                <i className="fas fa-database"></i>
                <h3>
                    <FormattedMessage
                        id='seo'
                        defaultMessage='Banco de Dados & SQL'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='seo-info'
                        defaultMessage='Modelagem, integração e manutenção de bancos de dados relacionais para manipulação complexa e integridade das informações.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="700">
                <i className="fas fa-lightbulb"></i>
                <h3>
                    <FormattedMessage
                        id='optimization'
                        defaultMessage='IA Estratégica para Negócios'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='optimization-info'
                        defaultMessage='Planejamento e implementação de roteiros de Inteligência Artificial corporativa para alavancar a produtividade e os resultados do negócio.'
                    />
                </p>
            </div>
        </div>
        <div className='portafolio-btn'>
            <Link to="/service">
                <ButtomGet/>
            </Link>
        </div>
    </section>
);

export default React.memo(Service);