import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useAutoAnimate } from '@formkit/auto-animate/react'
import './loginForm.css'
import hideIcon from '../../assets/passwordHideIcon.png'
import showIcon from '../../assets/passwordShowIcon.png'

function LoginForm() {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorMensaje, setErrorMensaje] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onBlur" });
    const [parent, enableAnimations] = useAutoAnimate()
    
    const onSubmit = async (data) => {
        setLoading(true);
        console.log(data);
        setLoading(false);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='formularioLogin' ref={parent}>
                <div className="campoFormLogin">
                    <label htmlFor="email">Correo electrónico</label>
                    <input
                        autoComplete='email'
                        id='email'
                        type="email"
                        className="form-control"
                        {...register("email", {
                            required: true,
                            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                            maxLength: 40,
                        })}
                    />
                </div>
                {errors.email && errors.email.type === "required" && (
                    <p className="invalidInputLogin">Correo requerido</p>
                )}
                {errors.email && errors.email.type === "pattern" && (
                    <p className="invalidInputLogin">Correo invalido</p>
                )}
                {errors.email && errors.email.type === "maxLength" && (
                    <p className="invalidInputLogin">No puede contener más de 40 caracteres</p>
                )}
                <div className="campoFormLogin">
                    <div>
                        <label htmlFor="password">Contraseña</label>
                        <a href="/Recuperar-contraseña/Email" className="linkOlvideContraseña" draggable={false}>Olvidé mi contraseña</a>
                    </div>
                    <div className='divShowPasswordLogin'>
                        <input
                            id='password'
                            autoComplete='current-password'
                            type={ passwordVisible ? 'text' : 'password' }
                            className="form-control"
                            {...register("password", {
                                required: true,
                                maxLength: 40
                            })}
                        />
                        {
                            passwordVisible ? <>
                                <button type='button' onClick={ () => { setPasswordVisible(false) } }>
                                    <img src={showIcon} alt="Mostrar contraseña" />
                                </button>
                            </> : <>
                                <button type='button' onClick={ () => { setPasswordVisible(true) } }>
                                    <img src={hideIcon} alt="Mostrar contraseña" />
                                </button>
                            </>
                        }
                    </div>
                    <a href="/Recuperar-contraseña/Email" className="text-decoration-none align-self-end linkOlvideContraseñaResponsive" draggable={false}>Olvidé mi contraseña</a>
                </div>
                {errors.password && errors.password.type === "required" && (
                    <p className="invalidInputLogin">Contraseña requerida</p>
                )}
                {errors.password && errors.password.type === "maxLength" && (
                    <p className="invalidInputLogin">
                        No puede contener más de 40 caracteres
                    </p>
                )}
                {error && <p className="invalidInputLogin">{errorMensaje}</p>}
                <div className='divBotonIniciarSesion'>
                    <button type="submit">
                        {loading ? (
                            <span
                                className="spinner-border spinner-border-sm mr-2"
                                role="status"
                                aria-hidden="true"
                            ></span>
                        ) : (
                            <>
                            <span>
                                Iniciar sesión
                            </span>
                            </>
                        )}
                    </button>
                </div>
            </form>
        </>
    )
}

export default LoginForm