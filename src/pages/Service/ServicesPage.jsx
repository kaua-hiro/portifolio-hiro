import React from 'react';
import './ServicesPage.css'

/* Componet */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import Accordion from './Accordion'

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const Services = () => {
  return (
    <div>

      <HeaderPage />

      <ParticleBackground />

      <main className="service-page">
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
                        id='design'
                        defaultMessage='Engenharia de Software'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='design-info'
                        defaultMessage='Desenvolvimento full-stack de plataformas escaláveis e sistemas corporativos robustos utilizando Python, React e arquiteturas modernas.'
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
        </section>

        {/* ========================================== */}
        {/* INÍCIO DO BLOCO OCULTO (PLANOS E PERGUNTAS) */}
        {/* ========================================== */}
        {false && (
          <>
            <section className="site-services">
              <h2 className="heading">
                <FormattedMessage
                  id='services-price'
                  defaultMessage='Price'
                />
              </h2>
              <div className="row">
                <div className="columns" data-aos="fade-up" data-aos-delay="200">
                  <h3>
                    <FormattedMessage
                      id='services-info-title-1'
                      defaultMessage='Essential'
                    />
                  </h3>
                  <h4 className="sub-title">
                    <FormattedMessage
                      id='services-info-sub-title-1'
                      defaultMessage='Perfect for new businesses'
                    />
                  </h4>
                  <p className="numero"><span>$</span>150</p>
                  <ul className="ul-cards-services">
                    <li>
                      <i className="fas fa-check"></i>
                      <span >
                        <FormattedMessage
                          id='services-info-1-p1'
                          defaultMessage='1 responsive page'
                        />
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      <span>
                        <FormattedMessage
                          id='services-info-p2'
                          defaultMessage='+3 sections for page'
                        />
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      <span>
                        <FormattedMessage
                          id='services-info-p3'
                          defaultMessage='Contact Form'
                        />
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      <span>
                        <FormattedMessage
                          id='services-info-p4'
                          defaultMessage='Domain for 1 year'
                        />
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      <span>
                        <FormattedMessage
                          id='services-info-p5'
                          defaultMessage='Hosting for 1 year'
                        />
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      <span>
                        <FormattedMessage
                          id='services-info-1-p6'
                          defaultMessage='Delivered in 5 business days'
                        />
                      </span>
                    </li>
                  </ul>
                  {/* <div className='portafolio-btn'>
                    <a href="#" className="custom-btn btn-codigo">
                      <FormattedMessage
                        id='services-buy'
                        defaultMessage='buy now'
                    /></a>
                  </div> */}
                </div>
                <div className="columns recomendado" data-aos="fade-up" data-aos-delay="300">
                  <h3>
                    <FormattedMessage
                      id='services-info-title-2'
                      defaultMessage='Professional'
                    />
                  </h3>
                  <h4 className="sub-title">
                    <FormattedMessage
                      id='services-info-sub-title-2'
                      defaultMessage='Designed for medium businesses'
                    />
                  </h4>
                  <p className="numero"><span>$</span>400</p>
                  <ul className="ul-cards-services">
                    <li>
                      <i className="fas fa-check"></i>
                      <span>
                        <FormattedMessage
                          id='services-info-2-p1'
                          defaultMessage='5 responsive page'
                        />
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      <span>
                        <FormattedMessage
                          id='services-info-p2'
                          defaultMessage='+3 sections for page'
                        />
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      <span>
                        <FormattedMessage
                          id='services-info-p3'
                          defaultMessage='Contact Form'
                        />
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      <span>
                        <FormattedMessage
                          id='services-info-p4'
                          defaultMessage='Domain for 1 year'
                        />
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      <span>
                        <FormattedMessage
                          id='services-info-p5'
                          defaultMessage='Hosting for 1 year'
                        />
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      <span>
                        <FormattedMessage
                          id='services-info-p6'
                          defaultMessage='animations'
                        />
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      <span>
                        <FormattedMessage
                          id='services-info-p7'
                          defaultMessage='Free maintenance for 6 months'
                        />
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      <span>
                        <FormattedMessage
                          id='services-info-2-p6'
                          defaultMessage='Delivered in 7 business days'
                        />
                      </span>
                    </li>
                  </ul>
                  
                  {/* <div className='portafolio-btn'>
                    <a href="#" className="custom-btn btn ">
                      <FormattedMessage
                        id='services-buy'
                        defaultMessage='buy now'
                      />
                    </a> 
                  </div> */}
                </div>
                <div className="columns" data-aos="fade-up" data-aos-delay="400">
                  <h3>Premium</h3>
                  <h4 className="sub-title">
                    <FormattedMessage
                      id='services-info-sub-title-3'
                      defaultMessage='Great for large websites'
                    />
                  </h4>
                  <p className="numero"><span>$</span>700</p>
                  <ul className="ul-cards-services">
                    <li>
                      <i className="fas fa-check"></i>
                      <span>
                        <FormattedMessage
                          id='services-info-3-p1'
                          defaultMessage='+10 responsive pages'
                        />
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      <span>
                        <FormattedMessage
                          id='services-info-p2'
                          defaultMessage='+3 sections for page'
                        />
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      <span>
                        <FormattedMessage
                          id='services-info-p3'
                          defaultMessage='Contact Form'
                        />
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      <span>
                        <FormattedMessage
                          id='services-info-p4'
                          defaultMessage='Domain for 1 year'
                        />
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      <span>
                        <FormattedMessage
                          id='services-info-p5'
                          defaultMessage='Hosting for 1 year'
                        />
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      <span>
                        <FormattedMessage
                          id='services-info-p6'
                          defaultMessage='animations'
                        />
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      <span>
                        <FormattedMessage
                          id='services-info-3-p7'
                          defaultMessage='Free maintenance for 1 year'
                        />
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      <span>
                        <FormattedMessage
                          id='services-info-3-p6'
                          defaultMessage='Delivered in 14 business days'
                        />
                      </span>
                    </li>
                  </ul>
                  
                  {/* <div className='portafolio-btn'>
                    <a href="#" className="custom-btn btn-codigo">
                      <FormattedMessage
                        id='services-buy'
                        defaultMessage='buy now'
                      />
                    </a>
                  </div> */}
                </div>
              </div>
            </section>

            <section className="preguntas">
              <h2 className="heading">
                <FormattedMessage
                  id='services-questions'
                  defaultMessage='Frequent questions'
                />
              </h2>
              <div className="accordion-container">
                <Accordion
                  title={<FormattedMessage
                    id='services-questions-1'
                    defaultMessage='What is a responsive web page?'
                  />}
                  content={<FormattedMessage
                    id='services-questions-p1'
                    defaultMessage='It is that page that is capable of adapting to any device where it is viewed, such as cell phones, tablets, laptops, without losing appearance or usability.'
                  />}
                  dataAos="fade-right"
                  dataAosDelay="300"
                />

                <Accordion
                  title={<FormattedMessage
                    id='services-questions-2'
                    defaultMessage='What is a Domain and a Hosting?'
                  />}
                  content={<FormattedMessage
                    id='services-questions-p2'
                    defaultMessage='Both are essential elements of a website. In short, the domain name is the address of the web page, while the hosting provides the space and resources necessary to launch the website.'
                  />}
                  dataAos="fade-left"
                  dataAosDelay="300"
                />

                <Accordion
                  title={<FormattedMessage
                    id='services-questions-3'
                    defaultMessage='Is monthly maintenance necessary?'
                  />}
                  content={<FormattedMessage
                    id='services-questions-p3'
                    defaultMessage='Regular maintenance of your website allows you to attract and retain customers with new information, new products and services, in addition to helping you maintain or improve your ranking in Google.'
                  />}
                  dataAos="fade-right"
                  dataAosDelay="300"
                />

                <Accordion
                  title={<FormattedMessage
                    id='services-questions-4'
                    defaultMessage='How to pay'
                  />}
                  content={<FormattedMessage
                    id='services-questions-p4'
                    defaultMessage='You can pay online by credit or debit cards and payments by transfers.'
                  />}
                  dataAos="fade-left"
                  dataAosDelay="300"
                />

              </div>
            </section>
          </>
        )}
        {/* ========================================== */}
        {/* FIM DO BLOCO OCULTO                        */}
        {/* ========================================== */}

      </main>

      <ScrollToTop />

      <Footer />

    </div>
  )
}
export default Services;