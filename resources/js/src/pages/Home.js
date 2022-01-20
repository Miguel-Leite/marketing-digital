import {NavLink} from 'react-router-dom';

import '../styles/header.scss';

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
        </div>
    )
}
