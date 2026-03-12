import React from 'react';
import '../../pages/Project/ProjectPage.css'
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';

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
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className='proyectos-slider mySwiper'
                >
                    {/* PROJETO 1 */}
                    <SwiperSlide className='caja'>
                        <img src={require('../../img/projeto-19.png')} alt='Dashboard Nexus' />
                        <div className="content">
                            <h3>Dashboard Nexus</h3>
                            <p>SaaS Multi-tenant</p>
                            <p className="tecnologias">
                                Next.js <span> -</span> TypeScript <span> -</span> Prisma
                            </p>
                            <a href="https://github.com/kaua-hiro" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>

                    {/* PROJETO 2 */}
                    <SwiperSlide className='caja'>
                        <img src={require('../../img/projeto-23.png')}
                         alt='TechTeamIA' />
                        <div className="content">
                            <h3>TechTeamIA</h3>
                            <p>Agente de Suporte</p>
                            <p className="tecnologias">
                                Copilot Studio <span> -</span> IA Generativa <span> -</span> PowerAutomate
                            </p>
                            <a href="https://github.com/kaua-hiro" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>

                    {/* PROJETO 3 
                    <SwiperSlide className='caja'>
                        <img src="https://placehold.co/600x400/111111/FFFFFF?text=Automacao+NFe" alt="Automação NFe" />
                        <div className="content">
                            <h3>Automação NFe</h3>
                            <p>Integração de Dados Fiscais</p>
                            <p className="tecnologias">
                                Python <span> -</span> SQL Server <span> -</span> Integração ERP
                            </p>
                            <a href="https://github.com/kaua-hiro" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide> */}

                    {/* PROJETO 4 (FLOW REMINDER) 
                    <SwiperSlide className='caja'>
                        <img src="https://placehold.co/600x400/111111/FFFFFF?text=Flow+Reminder+API" alt="Flow-Reminder API" />
                        <div className="content">
                            <h3>Flow-Reminder API</h3>
                            <p>Mensageria & WhatsApp</p>
                            <p className="tecnologias">
                                TypeScript <span> -</span> Node.js <span> -</span> WhatsApp API
                            </p>
                            <a href="https://github.com/kaua-hiro/flow-reminder" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide> */}

                    {/* PROJETO 5 (CRYPTO EXCHANGE) 
                    <SwiperSlide className='caja'>
                        <img src="https://placehold.co/600x400/111111/FFFFFF?text=Crypto+Exchange" alt="Crypto Exchange" />
                        <div className="content">
                            <h3>Crypto Exchange</h3>
                            <p>Consumo de APIs Financeiras</p>
                            <p className="tecnologias">
                                React <span> -</span> JavaScript <span> -</span> REST APIs
                            </p>
                            <a href="https://github.com/kaua-hiro" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide> */}

                    {/* PROJETO 6 */}
                    <SwiperSlide className='caja'>
                        <img src={require('../../img/projeto-22.png')}
                         alt='Bot Dados Econômicos' />
                        <div className="content">
                            <h3>Bot Dados Econômicos</h3>
                            <p>Webhooks & APIs</p>
                            <p className="tecnologias">
                                Python <span> -</span> API BCB <span> -</span> Webhook
                            </p>
                            <a href="https://github.com/kaua-hiro" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>

                    {/* PROJETO 7 POKEDEX */}
                    <SwiperSlide className='caja'>
                        <img 
                            src={require('../../img/projeto-18.png')} 
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
                            <a href="https://kaua-hiro.github.io/API_Pokedex/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/kaua-hiro/API_Pokedex" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>

                    {/* PROJETO 8 (BARBERLAB SAAS) 
                    <SwiperSlide className='caja'>
                        <img 
                            src={require('../../img/projeto-18.png')} 
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
                            <a href="https://github.com/kaua-hiro" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide> */}

                    {/* PROJETO 9 (STUDIO LELEKS) */}
                    <SwiperSlide className='caja'>
                        <img 
                            src={require('../../img/projeto-21.png')} 
                            alt='Studio Leleks' 
                        />
                        <div className="content">
                            <h3>Studio Leleks</h3>
                            <p>Landing Page Premium</p>
                            <p className="tecnologias">
                                React
                                <span> -</span> TypeScript
                                <span> -</span> Tailwind CSS
                            </p>
                            <a href="https://github.com/kaua-hiro" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>

                    {/* PROJETO 10 (STUDIO LILIAM) */}
                    <SwiperSlide className='caja'>
                        <img 
                            src={require('../../img/projeto-20.png')} 
                            alt='Studio Liliam' 
                        />
                        <div className="content">
                            <h3>Studio Liliam</h3>
                            <p>Landing Page de Conversão</p>
                            <p className="tecnologias">
                                React
                                <span> -</span> TypeScript
                                <span> -</span> Radix UI
                            </p>
                            <a href="https://github.com/kaua-hiro" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>

                </Swiper>
                <div className="swiper-pagination"></div>
            </div>
            
            <div className='portafolio-btn'>
                <Link to="/project">
                    <ButtomGet/>
                </Link>
            </div>
        </section>
    )
};
export default React.memo(Project);