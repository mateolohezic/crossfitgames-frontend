import React from 'react'
import './login.css'
import LoginForm from '../../Components/LoginForm/LoginForm'

function Login() {

    return (
    <>
        <div className='contenedorPrincipalLogin'>
            <div className='contenedorLogin'>
                <div className='subContenedorLogin'>
                    <h1>Iniciar sesión</h1>
                    <p>Inicia sesión en CrossFit Games para comenzar a participar de nuestras competencias.</p>
                    <LoginForm/>
                </div>
            </div>
            <div className='imagenFondoLogin'>
            </div>
        </div>  
    </>
    )
}

export default Login
