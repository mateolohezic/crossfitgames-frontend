import React from 'react';
import './footer.css';
import logo from '../../assets/logo.png';
import instagram from '../../assets/iconInstagram.png';
import youtube from '../../assets/iconYouTube.png';
import whatsapp from '../../assets/iconWhatsApp.png';
import phone from '../../assets/iconPhone.png';
import email from '../../assets/iconEmail.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <article>
                    <header>
                        <div className="footerLogo">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="footerSocial">
                            <ul>
                                <li>
                                    <Link className='footerSocialLink' to="https://google.com" target="_blank">
                                        <span className="visually-hidden">Instagram</span>
                                        <img src={instagram} alt="Instagram crossfitgames" />
                                    </Link>
                                </li>
                                <li>
                                    <Link className='footerSocialLink' to="https://google.com" target="_blank">
                                        <span className="visually-hidden">WhatsApp</span>
                                        <img src={whatsapp} alt="WhatsApp crossfitgames" />
                                    </Link>
                                </li>
                                <li>
                                    <Link className='footerSocialLink' to="https://google.com" target="_blank">
                                        <span className="visually-hidden">E-mail</span>
                                        <img src={email} alt="Email crossfitgames" />
                                    </Link>
                                </li>
                                <li>
                                    <Link className='footerSocialLink' to="https://google.com" target="_blank">
                                        <span className="visually-hidden">Teléfono</span>
                                        <img src={phone} alt="telefono crossfitgames" />
                                    </Link>
                                </li>
                                <li>
                                    <Link className='footerSocialLink' to="https://google.com" target="_blank">
                                        <span className="visually-hidden">YouTube</span>
                                        <img src={youtube} alt="YouTube crossfitgames" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </header>
                    <div className="footerDivisor"></div>
                    <main>
                        <h4>Title xdxd</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, veritatis esse? Cupiditate dolores reprehenderit vero voluptatum veniam sunt illum fugit, quidem nobis eveniet vitae praesentium minima esse necessitatibus. Aut quia odio ut? Iure, laudantium dolorem incidunt voluptates assumenda quasi temporibus? Dolore, sint delectus veritatis eaque animi quod ipsum, molestiae autem culpa rerum tenetur dicta. Impedit voluptates veritatis cumque dolorem recusandae.</p>
                    </main>
                    <footer>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias nisi quibusdam enim vero recusandae sit iure, mollitia ullam nemo architecto?</p>
                    </footer>
                </article>
            </div>
        </footer>
    )
}

export default Footer;
