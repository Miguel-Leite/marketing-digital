import { useEffect } from 'react';

import AOS from 'aos'

import 'aos/dist/aos.css'

import {
    IoMegaphoneSharp, 
    IoStatsChart, 
    IoEarth,
    IoCheckmarkCircleOutline,
    IoCallSharp,
    IoMailSharp,
    IoLogoWhatsapp,
    IoLogoGoogle,
    IoLogoLinkedin,
    IoLogoPinterest
} from 'react-icons/io5'

import {NavLink} from 'react-router-dom';
import AboutUs from '../assets/about.jpg'
import Client from '../assets/client.jpg'

import '../styles/page.scss';

export function Home() {
   
    useEffect(()=>{
        AOS.init({ duration: 2000 })
    },[])

    return (
        <div>
            <header className='header_page'>
                <div className="container">    
                    <nav className="nav_page" data-aos="zoom-in">
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
                            <h1 data-aos="fade-right">
                                Seja bem-vindo a plataforma 
                                Marketing Digital
                            </h1>
                            <p data-aos="fade-right">
                                The automated process all your website tasks. 
                                Discover tools and techniques to engage effectively 
                                with vulnerable children and young people.
                            </p>
                            <NavLink to="/" className="nav_brand" data-aos="fade-right"> Marketing<span>Digital</span> </NavLink>
                        </div>
                    </div>
                </div>
            </header>

            <main className="box_header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12" data-aos="fade-right">
                            <div className="box">
                                <h4>Planos Gratis</h4>
                                <p>
                                The automated process all your website tasks. Discover 
                                tools and techniques to engage effectively with vulnerable 
                                children and young people...<NavLink to="/"> ler mais. </NavLink>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12" data-aos="fade-left">
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
                        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                            <img src={AboutUs} className="img-responsive w-100 h-100" data-aos="fade-up" alt="About Us" />
                        </div>
                        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                            <h1 className='title' data-aos="fade-up">Sobre a nossa plataforma Marketing Digital</h1>

                            <p data-aos="fade-in">
                            Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. 
                            Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. 
                            Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.Risus commodo viverra sebfd dho 
                            eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan.
                            </p>

                            <p data-aos="fade-in">
                            Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. 
                            Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. 
                            Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.Risus commodo viverra sebfd dho 
                            eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan.
                            </p>

                            <p data-aos="fade-in">
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
                    <h1 className='title' data-aos="fade-up"> Nossos serviços disponíveis </h1>
                    <div className="row">
                        
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" data-aos="fade-right">
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

                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" data-aos="fade-up">
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

                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" data-aos="fade-left">
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
                        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                            <img src={Client} className="img-responsive w-100" data-aos="fade-right" alt="Client" />
                        </div>
                        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7" data-aos="fade-left">
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

            <div className='contact'>
                <div className='container'>
                    <h1 className='title' data-aos="fade-in">Entra em contacto</h1>
                    <p data-aos="fade-in">ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus</p>
                    
                    <div className='info' data-aos="fade-right">
                        <div className='row justify-content-center align-center'>
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                <div className='info-item'>
                                    <IoLogoWhatsapp />
                                    <p> +244 941 398 739 </p>
                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                <div className='info-item'>
                                    <IoMailSharp />
                                    <p> miguelleite200leite.com </p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                    <div className='row justify-content-center'>
                        <div className="col-xs-12 col-sm-10 col-md-12 col-lg-10">
                            <form data-aos="fade-up">
                                <div className="form-group row">
                                    <div className="col-sm-6">
                                        <label htmlFor="name">Nome: </label>
                                        <input type="text" className="form-control" name="name" id="name" placeholder="Informe o seu nome completo" />
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="email">email: </label>
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Informe o seu email" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject">Assunto: </label>
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Informe o assunto" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Mensagem: </label>
                                    <textarea name="message" id="message" className="form-control" placeholder='Escreve aqui a sua mensagem...' rows="5" required="required"></textarea>
                                </div>                                    

                                <div className="form-group row mt-5">
                                        <button type="submit" className="btn btn-send col-12" data-aos="fade-up">Enviar</button>
                                </div>
                            </form>
                        </div>          
                    </div>
                </div>
            </div>

            <footer data-aos="fade-up">
                <div className="footer-wrappper footer-bg">
                    <div className="footer-area">
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="col-xl-4 col-lg-5 col-md-4 col-sm-6">
                                    <div className="single-footer-caption mb-50">
                                        <div className="single-footer-caption mb-30">
                                            
                                            <div className="footer-logo mb-25">
                                                <NavLink to="/">Marketing<span>Digital</span></NavLink>
                                            </div>
                                            <div className="footer-tittle">
                                                <div className="footer-pera">
                                                    <p>The automated process starts as soon as your clothes go into the machine.</p>
                                                </div>
                                            </div>
                                            
                                            <div className="footer-social">
                                                <NavLink to="/"><IoLogoGoogle /></NavLink>
                                                <NavLink to="/"><IoLogoLinkedin /></NavLink>
                                                <NavLink to="/"><IoLogoPinterest /></NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5">
                                    <div className="single-footer-caption mb-50">
                                        <div className="footer-tittle">
                                            <h4>Soluções</h4>
                                            <ul>
                                                <li><NavLink to="/">Design & creatives</NavLink></li>
                                                <li><NavLink to="/">Telecomunicações</NavLink></li>
                                                <li><NavLink to="/">Gestão Financeira</NavLink></li>
                                                <li><NavLink to="/">Desenvolvimento Web</NavLink></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                                    <div className="single-footer-caption mb-50">
                                        <div className="footer-tittle">
                                            <h4>Suporte</h4>
                                            <ul>
                                                <li><NavLink to="/">Design & creatives</NavLink></li>
                                                <li><NavLink to="/">Telecomunicações</NavLink></li>
                                                <li><NavLink to="/">Gestão Financeira</NavLink></li>
                                                <li><NavLink to="/">Desenvolvimento Web</NavLink></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                    <div className="single-footer-caption mb-50">
                                        <div className="footer-tittle">
                                            <h4>Empresas</h4>
                                            <ul>
                                                <li><NavLink to="/">Design & creatives</NavLink></li>
                                                <li><NavLink to="/">Telecomunicações</NavLink></li>
                                                <li><NavLink to="/">Gestão Financeira</NavLink></li>
                                                <li><NavLink to="/">Desenvolvimento Web</NavLink></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="footer-bottom-area">
                        <div className="container">
                            <div className="footer-border">
                                <div className="row d-flex align-items-center">
                                    <div className="col-xl-12 ">
                                        <div className="footer-copy-right text-center">
                                            <p>
                                            Copyright &copy; All rights reserved | Developer  by <NavLink to="/" target="_blank">Marketing Digital</NavLink>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  </footer> 
        </div>
    )
}
