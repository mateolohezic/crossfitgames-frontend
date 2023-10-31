import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <div className="navbar navbar-expand-md">
        <div className="container container--1200">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="crossfit-logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                <span className="nav-link-underline"></span>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Inscripción</a>
                <span className="nav-link-underline"></span>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
                <span className="nav-link-underline"></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="nav-footer">
        <ul>
          <li>
            <Link to="https://google.com" target="_blank">
              <span className="visually-hidden">Instagram</span>
              <i className="fa fa-instagram"></i>
            </Link>
          </li>
          <li>
            <Link to="https://google.com" target="_blank">
              <span className="visually-hidden">WhatsApp</span>
              <i className="fa fa-whatsapp"></i>
            </Link>
          </li>
          <li>
            <Link to="https://google.com" target="_blank">
              <span className="visually-hidden">E-mail</span>
              <i className="fa fa-envelope"></i>
            </Link>
          </li>
          <li>
            <Link to="https://google.com" target="_blank">
              <span className="visually-hidden">Teléfono</span>
              <i className="fa fa-phone"></i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar