import React from 'react'
import './register.css'
import RegisterForm from '../../Components/RegisterForm/RegisterForm'

function Register() {
    return (
    <>
        <div className='contenedorPrincipalRegister'>
            <div className='subcontenedorRegister'>
                <h1>¡Crea tu cuenta!</h1>
                <RegisterForm/>
            </div>
        </div>
    </>
    )
}

export default Register
