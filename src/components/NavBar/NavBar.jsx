import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import instagram from '../../assets/iconInstagram.png';
import youtube from '../../assets/iconYouTube.png';
import whatsapp from '../../assets/iconWhatsApp.png';
import phone from '../../assets/iconPhone.png';
import email from '../../assets/iconEmail.png';

import menu from '../../assets/menu.svg';

const NavBar = () => {

  return (
    <nav>
      <div className="navbar navbar-expand-lg fixed-top">
        <div className="container container1200">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="crossfit-logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            {/* <span className="navbar-toggler-icon"></span> */}
            <img src={menu} alt="menu" />
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <a className="navbar-brand" href="#">
                <img src={logo} alt="crossfit-logo" />
              </a>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Inicio</a>
                  <span className="navLinkUnderline"></span>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Inscripcion">Inscripción</a>
                  <span className="navLinkUnderline"></span>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#QueEs">¿Qué es?</a>
                  <span className="navLinkUnderline"></span>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/competencia-actual">Competencia Actual</a>
                  <span className="navLinkUnderline"></span>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Sponsors">Sponsors</a>
                  <span className="navLinkUnderline"></span>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Nosotros">Nosotros</a>
                  <span className="navLinkUnderline"></span>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">Iniciar Sesión</a>
                  <span className="navLinkUnderline"></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="navHeader">
        <ul>
          <li>
            <Link to="https://google.com" target="_blank">
              <span className="visually-hidden">Instagram</span>
              <img src={instagram} alt="Instagram crossfitgames" />
            </Link>
          </li>
          <li>
            <Link to="https://google.com" target="_blank">
              <span className="visually-hidden">WhatsApp</span>
              <img src={whatsapp} alt="WhatsApp crossfitgames" />
            </Link>
          </li>
          <li>
            <Link to="https://google.com" target="_blank">
              <span className="visually-hidden">E-mail</span>
              <img src={email} alt="Email crossfitgames" />
            </Link>
          </li>
          <li>
            <Link to="https://google.com" target="_blank">
              <span className="visually-hidden">Teléfono</span>
              <img src={phone} alt="telefono crossfitgames" />
            </Link>
          </li>
          <li>
            <Link to="https://google.com" target="_blank">
              <span className="visually-hidden">YouTube</span>
              <img src={youtube} alt="YouTube crossfitgames" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar