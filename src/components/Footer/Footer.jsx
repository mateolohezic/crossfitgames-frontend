import React from 'react';
import './footer.css';
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="row row-cols-1 row-cols-lg-2">
                    <div className="col">
                        <section className="footer-info">
                            <div className="footer-logo">
                                <img src={logo} alt="logo" />
                            </div>
                            <ul>
                                <h3>Informacion de Contacto</h3>
                                <li>
                                    <p>asdasdad@gmail.com</p>
                                </li>
                                <li>
                                    <p>+54 9 381 653-3021</p>
                                </li>
                                <li>
                                    <p>crossfit_ok</p>
                                </li>
                            </ul>
                        </section>
                    </div>
                    <div className="col">
                        <form action="" className='contact-form'>
                            <h2 className='contact-title'>Envíanos tu consulta</h2>
                            <label htmlFor="contact-name">Nombre</label>
                            <div className='footer-input'>
                                <i className="fa fa-user" aria-hidden="true"></i>
                                <input type="text" name="contact-name" id="contact-name" required />
                            </div>
                            <label htmlFor="contact-email">Email</label>
                            <div className='footer-input'>
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                <input type="email" name="contact-email" id="contact-email" required />
                            </div>
                            <label htmlFor="contact-message">Escribe tu mensaje:</label>
                            <div className="footer-input">
                                <textarea name="contact-message" id="contact-message" cols="30" rows="10">¡Hola!, Me gustaría saber sobre...</textarea>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
