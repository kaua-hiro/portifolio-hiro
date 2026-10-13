import React from 'react';
import '../../pages/Project/ProjectPage.css'

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
    return (
        <section className="proyectos" id="proyectos">
            <h2 className="heading">
                <FormattedMessage
                    id='projects'
                    defaultMessage='Projetos'
                />
            </h2>
            <div className="proyect-site" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    autoplay={{ delay: 4200, disableOnInteraction: false, pauseOnMouseEnter: true }}
                    pagination={{ clickable: true }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className='proyectos-slider mySwiper'
                >
                    {/* PROJETO 16 (PAINEL ECONOMICO + CHAT) */}
                    <SwiperSlide className='caja'>
                        <span className="project-status project-status--live"><span className="project-status__dot" aria-hidden="true"></span><FormattedMessage id="project-live" defaultMessage="Demo ao vivo" /></span>
                        <img loading="lazy"
                            src={require('../../img/projeto-36.webp')}
                            alt='Painel Econômico & Chat em Tempo Real'
                        />
                        <div className="content">
                            <h3>Painel Econômico &amp; Chat</h3>
                            <p>Indicadores do BCB &amp; Tempo Real</p>
                            <p className="tecnologias">
                                Next.js
                                <span> -</span> TypeScript
                                <span> -</span> Socket.IO
                            </p>
                            <a href="https://painel-economico-chat.onrender.com" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span><FormattedMessage id="project-demo" defaultMessage="Demo" /></span></a>
                            <a href="https://github.com/kaua-hiro/painel-economico-chat" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer"><FormattedMessage id="project-repo" defaultMessage="Repositório" /></a>
                        </div>
                    </SwiperSlide>

                    {/* PROJETO 1 (STUDIO ARQUITETURA) */}
                    <SwiperSlide className='caja'>
                        <span className="project-status project-status--live"><span className="project-status__dot" aria-hidden="true"></span><FormattedMessage id="project-live" defaultMessage="Demo ao vivo" /></span>
                        <img loading="lazy" src={require('../../img/projeto-33.webp')} alt='Studio Arquitetura' />
                        <div className="content">
                            <h3>Studio Arquitetura</h3>
                            <p>Landing Page de Arquitetura &amp; Interiores</p>
                            <p className="tecnologias">
                                HTML5 <span> -</span> CSS3 <span> -</span> JavaScript
                            </p>
                            <a href="https://hmarquiteturaprojeto.vercel.app/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span><FormattedMessage id="project-demo" defaultMessage="Demo" /></span></a>
                            <a href="https://github.com/kaua-hiro" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer"><FormattedMessage id="project-repo" defaultMessage="Repositório" /></a>
                        </div>
                    </SwiperSlide>

                    {/* PROJETO 2 */}
                    <SwiperSlide className='caja'>
                        <span className="project-status project-status--private"><FormattedMessage id="project-private" defaultMessage="Projeto interno" /></span>
                        <img loading="lazy" src={require('../../img/projeto-23.webp')}
                         alt='TechTeamIA' />
                        <div className="content">
                            <h3>TechTeamIA</h3>
                            <p>Agente de Suporte</p>
                            <p className="tecnologias">
                                Copilot Studio <span> -</span> IA Generativa <span> -</span> PowerAutomate
                            </p>
                            <a href="https://github.com/kaua-hiro" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer"><FormattedMessage id="project-repo" defaultMessage="Repositório" /></a>
                        </div>
                    </SwiperSlide>

                    {/* PROJETO 3 (AUTOMAÇÃO NFE) */}
                    <SwiperSlide className='caja'>
                        <span className="project-status project-status--private"><FormattedMessage id="project-private" defaultMessage="Projeto interno" /></span>
                        <img loading="lazy" src={require('../../img/projeto-nfe.webp')} alt="Automação NFe — robô RPA fiscal em Python com SQL Server" width="1200" height="500" />
                        <div className="content">
                            <h3>Automação NFe</h3>
                            <p>Integração de Dados Fiscais</p>
                            <p className="tecnologias">
                                Python <span> -</span> SQL Server <span> -</span> API Qive
                            </p>
                            <a href="https://github.com/kaua-hiro/nfe-automation-python-sql" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer"><FormattedMessage id="project-repo" defaultMessage="Repositório" /></a>
                        </div>
                    </SwiperSlide>

                    {/* PROJETO 4 (FLOW REMINDER) */}
                    <SwiperSlide className='caja'>
                        <img loading="lazy" src={require('../../img/projeto-flow-reminder.webp')} alt="Flow-Reminder — SaaS de lembretes automáticos para agendamentos" width="1200" height="500" />
                        <div className="content">
                            <h3>Flow-Reminder</h3>
                            <p>Lembretes automáticos (SaaS)</p>
                            <p className="tecnologias">
                                Next.js <span> -</span> Prisma <span> -</span> Supabase
                            </p>
                            <a href="https://github.com/kaua-hiro/flow-reminder" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer"><FormattedMessage id="project-repo" defaultMessage="Repositório" /></a>
                        </div>
                    </SwiperSlide>

                    {/* PROJETO 6 */}
                    <SwiperSlide className='caja'>
                        <span className="project-status project-status--private"><FormattedMessage id="project-private" defaultMessage="Projeto interno" /></span>
                        <img loading="lazy" src={require('../../img/projeto-22.webp')}
                         alt='Bot Dados Econômicos' />
                        <div className="content">
                            <h3>Bot Dados Econômicos</h3>
                            <p>Webhooks & APIs</p>
                            <p className="tecnologias">
                                Python <span> -</span> API BCB <span> -</span> Webhook
                            </p>
                            <a href="https://github.com/kaua-hiro" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer"><FormattedMessage id="project-repo" defaultMessage="Repositório" /></a>
                        </div>
                    </SwiperSlide>

                    {/* PROJETO 7 POKEDEX */}
                    <SwiperSlide className='caja'>
                        <span className="project-status project-status--live"><span className="project-status__dot" aria-hidden="true"></span><FormattedMessage id="project-live" defaultMessage="Demo ao vivo" /></span>
                        <img loading="lazy"
                            src={require('../../img/projeto-18.webp')}
                            alt='Pokedex API'
                        />
                        <div className="content">
                            <h3>Pokedex API</h3>
                            <p>Consumo de APIs & Frontend</p>
                            <p className="tecnologias">
                                JavaScript
                                <span> -</span> Async/Await
                                <span> -</span> REST API
                            </p>
                            <a href="https://kaua-hiro.github.io/API_Pokedex/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span><FormattedMessage id="project-demo" defaultMessage="Demo" /></span></a>
                            <a href="https://github.com/kaua-hiro/API_Pokedex" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer"><FormattedMessage id="project-repo" defaultMessage="Repositório" /></a>
                        </div>
                    </SwiperSlide>

                    {/* PROJETO 8 (BARBERLAB SAAS)*/}
                    <SwiperSlide className='caja'>
                        <span className="project-status project-status--live"><span className="project-status__dot" aria-hidden="true"></span><FormattedMessage id="project-live" defaultMessage="Demo ao vivo" /></span>
                        <img loading="lazy"
                            src={require('../../img/projeto-24.webp')}
                            alt='BarberLab SaaS'
                        />
                        <div className="content">
                            <h3>BarberLab</h3>
                            <p>SaaS de Agendamento Full-Stack</p>
                            <p className="tecnologias">
                                Next.js
                                <span> -</span> Prisma
                                <span> -</span> PostgreSQL
                            </p>
                            <a href="https://meu-saas-barbearia-dun.vercel.app/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span><FormattedMessage id="project-demo" defaultMessage="Demo" /></span></a>
                        </div>
                    </SwiperSlide>

                    {/* PROJETO 11 (VERNIZ ATELIER) */}
                    <SwiperSlide className='caja'>
                        <span className="project-status project-status--live"><span className="project-status__dot" aria-hidden="true"></span><FormattedMessage id="project-live" defaultMessage="Demo ao vivo" /></span>
                        <img loading="lazy"
                            src={require('../../img/projeto-34.webp')}
                            alt='Verniz Atelier'
                        />
                        <div className="content">
                            <h3>Verniz Atelier</h3>
                            <p>Landing Page de Salão de Beleza</p>
                            <p className="tecnologias">
                                HTML
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                            </p>
                            <a href="https://vernizatelier.vercel.app/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span><FormattedMessage id="project-demo" defaultMessage="Demo" /></span></a>
                        </div>
                    </SwiperSlide>

                    {/* PROJETO 12 (FOCINHO FELIZ PET SHOP) */}
                    <SwiperSlide className='caja'>
                        <span className="project-status project-status--live"><span className="project-status__dot" aria-hidden="true"></span><FormattedMessage id="project-live" defaultMessage="Demo ao vivo" /></span>
                        <img loading="lazy"
                            src={require('../../img/projeto-27.webp')}
                            alt='Focinho Feliz Pet Shop'
                        />
                        <div className="content">
                            <h3>Focinho Feliz</h3>
                            <p>Landing Page de Pet Shop &amp; Day Care</p>
                            <p className="tecnologias">
                                HTML
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                            </p>
                            <a href="https://petshop-focinho-feliz.vercel.app/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span><FormattedMessage id="project-demo" defaultMessage="Demo" /></span></a>
                        </div>
                    </SwiperSlide>

                    {/* PROJETO 13 (LEDGER - GESTAO FINANCEIRA) */}
                    <SwiperSlide className='caja'>
                        <span className="project-status project-status--live"><span className="project-status__dot" aria-hidden="true"></span><FormattedMessage id="project-live" defaultMessage="Demo ao vivo" /></span>
                        <img loading="lazy"
                            src={require('../../img/projeto-28.webp')}
                            alt='Ledger - Gestão Financeira'
                        />
                        <div className="content">
                            <h3>Ledger</h3>
                            <p>Gestão Financeira Profissional</p>
                            <p className="tecnologias">
                                React
                                <span> -</span> Vite
                                <span> -</span> React Router
                            </p>
                            <a href="https://finops-ledger-opal.vercel.app/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span><FormattedMessage id="project-demo" defaultMessage="Demo" /></span></a>
                            <a href="https://github.com/kaua-hiro/finops-ledger" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer"><FormattedMessage id="project-repo" defaultMessage="Repositório" /></a>
                        </div>
                    </SwiperSlide>

                    {/* PROJETO 14 (TELA DE LOGIN) */}
                    <SwiperSlide className='caja'>
                        <span className="project-status project-status--live"><span className="project-status__dot" aria-hidden="true"></span><FormattedMessage id="project-live" defaultMessage="Demo ao vivo" /></span>
                        <img loading="lazy"
                            src={require('../../img/projeto-35.webp')}
                            alt='Tela de Login'
                        />
                        <div className="content">
                            <h3>Tela de Login</h3>
                            <p>Interface de Autenticação</p>
                            <p className="tecnologias">
                                Next.js
                                <span> -</span> TypeScript
                                <span> -</span> React
                            </p>
                            <a href="https://tela-de-login-portfolio.vercel.app/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span><FormattedMessage id="project-demo" defaultMessage="Demo" /></span></a>
                        </div>
                    </SwiperSlide>

                    {/* PROJETO 15 (ARANHA-VERSO HUB) */}
                    <SwiperSlide className='caja'>
                        <span className="project-status project-status--live"><span className="project-status__dot" aria-hidden="true"></span><FormattedMessage id="project-live" defaultMessage="Demo ao vivo" /></span>
                        <img loading="lazy"
                            src={require('../../img/projeto-30.webp')}
                            alt='Aranha-Verso Hub'
                        />
                        <div className="content">
                            <h3>Aranha-Verso Hub</h3>
                            <p>Tributo Interativo em Quadrinhos</p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS3
                                <span> -</span> JavaScript
                            </p>
                            <a href="https://spider-verse-hub.vercel.app/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span><FormattedMessage id="project-demo" defaultMessage="Demo" /></span></a>
                            <a href="https://github.com/kaua-hiro/spider-verse-hub" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer"><FormattedMessage id="project-repo" defaultMessage="Repositório" /></a>
                        </div>
                    </SwiperSlide>

                </Swiper>
                <div className="swiper-pagination"></div>
            </div>
        </section>
    )
};
export default React.memo(Project);