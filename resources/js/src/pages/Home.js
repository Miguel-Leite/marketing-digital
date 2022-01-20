import {
    IoMegaphoneSharp, 
    IoStatsChart, 
    IoEarth,
    IoCheckmarkCircleOutline
} from 'react-icons/io5'

import {NavLink} from 'react-router-dom';
import AboutUs from '../assets/about.jpg'
import Client from '../assets/client.jpg'
import '../styles/page.scss';

export function Home() {
    return (
        <div>
            <header className='header_page'>
                <div class="container">    
                    <nav className="nav_page">
                        <NavLink to="/" className="nav_brand"> Marketing<span>Digital</span> </NavLink>
                        <ul>
                            <li><NavLink to="/"> Home </NavLink></li>
                            <li><NavLink to="/"> Sobre </NavLink></li>
                            <li><NavLink to="/"> Servicos </NavLink></li>
                            <li><NavLink to="/"> Contacto </NavLink></li>
                        </ul>
                    </nav>

                    <div className="content">
                        <div className="col-lg-6 col-md-12 col-xs-12">
                            <h1>
                                Seja bem-vindo a plataforma 
                                Marketing Digital
                            </h1>
                            <p>
                                The automated process all your website tasks. 
                                Discover tools and techniques to engage effectively 
                                with vulnerable children and young people.
                            </p>
                            <NavLink to="/" className="nav_brand"> Marketing<span>Digital</span> </NavLink>
                        </div>
                    </div>
                </div>
            </header>

            <main className="box_header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                            <div className="box">
                                <h4>Planos Gratis</h4>
                                <p>
                                The automated process all your website tasks. Discover 
                                tools and techniques to engage effectively with vulnerable 
                                children and young people...<NavLink to="/"> ler mais. </NavLink>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                            <div className="box">
                                <h4>Planos Pagos</h4>
                                <p>
                                The automated process all your website tasks. Discover 
                                tools and techniques to engage effectively with vulnerable 
                                children and young people...<NavLink to="/"> ler mais. </NavLink>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <div className="about">
                <div className="container">
                    <div className="row">
                        <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                            <img src={AboutUs} class="img-responsive w-100 h-100" alt="About Us" />
                        </div>
                        <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                            <h1 className='title'>Sobre a nossa plataforma Marketing Digital</h1>

                            <p>
                            Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. 
                            Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. 
                            Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.Risus commodo viverra sebfd dho 
                            eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan.
                            </p>

                            <p>
                            Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. 
                            Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. 
                            Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.Risus commodo viverra sebfd dho 
                            eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan.
                            </p>

                            <p>
                            Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. 
                            Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. 
                            Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.Risus commodo viverra sebfd dho 
                            eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='services'>
                <div className="container">
                    <h1 className='title'> Nossos serviços disponíveis </h1>
                    <div className="row">
                        
                        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <div className='service-item'>
                                <div className='icon icon-danger'>
                                    <IoMegaphoneSharp />
                                </div>
                                <div className='content'>
                                    <h4> Marketing </h4>
                                    <p>
                                    Risus commodo viverra sebfd dho eiusmod commodo viverra sebfd dho eiusmod tempor maecenas accumsan.
                                    </p>
                                </div>
                            </div>    
                        </div>

                        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <div className='service-item'>
                                <div className='icon icon-success'>
                                    <IoStatsChart />
                                </div>
                                <div className='content'>
                                    <h4> Gestão Financeira </h4>
                                    <p>
                                    Risus commodo viverra sebfd dho eiusmod commodo viverra sebfd dho eiusmod tempor maecenas accumsan.
                                    </p>
                                </div>
                            </div>    
                        </div>

                        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <div className='service-item'>
                                <div className='icon icon-info'>
                                    <IoEarth />
                                </div>
                                <div className='content'>
                                    <h4> Desenvolvido de pagina web </h4>
                                    <p>
                                    Risus commodo viverra sebfd dho eiusmod commodo viverra sebfd dho eiusmod tempor maecenas accumsan.
                                    </p>
                                </div>
                            </div>    
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className='client'>
                <div className='container'>
                    <div className='row'>
                    <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                            <img src={Client} class="img-responsive w-100" alt="Client" />
                        </div>
                        <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                            <h2 className='title'>Seja um clienta da Marketing Digital</h2>

                            <p>
                            Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. 
                            Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. 
                            Risus 
                            </p>
                            <div className='container mt-5'>
                                <div className='item'>
                                    <IoCheckmarkCircleOutline />
                                    <p>
                                    ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. 
                                    Risus 
                                    </p>
                                </div>
                                <div className='item'>
                                    <IoCheckmarkCircleOutline />
                                    <p>
                                    ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. 
                                    Risus 
                                    </p>
                                </div>
                                <div className='item'>
                                    <IoCheckmarkCircleOutline />
                                    <p>
                                    ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. 
                                    Risus 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
