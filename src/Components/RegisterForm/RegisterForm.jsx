import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useAutoAnimate } from '@formkit/auto-animate/react'
import './registerForm.css'

function RegisterForm() {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorMensaje, setErrorMensaje] = useState("");
    const { register, handleSubmit, watch, formState: { errors } } = useForm({ mode: "onBlur" });
    const [parent, enableAnimations] = useAutoAnimate()
    
    const onSubmit = async (data) => {
        setLoading(true);
        console.log(data);
        setLoading(false);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='formularioRegister' ref={parent}>
                <div className='dobleCampoFormRegister'>
                    <div className="campoFormRegister">
                        <label htmlFor="name">Nombre</label>
                        <input
                            autoComplete='given-name'
                            id='name'
                            type="text"                            
                            maxLength="40"
                            className="form-control"
                            {...register("name", {
                                required: true,
                                maxLength: 40,
                            })}
                        />
                        {errors.name && errors.name.type === "required" && (
                            <p className="invalidInputLogin">Campo requerido.</p>
                        )}
                        {errors.name && errors.name.type === "maxLength" && (
                            <p className="invalidInputLogin">No puede contener más de 40 caracteres.</p>
                        )}
                    </div>
                    <div className="campoFormRegister">
                        <label htmlFor="surname">Apellido</label>
                        <input
                            id='surname'
                            autoComplete='family-name'
                            type='text'
                            className="form-control"
                            {...register("surname", {
                                required: true,
                                maxLength: 40
                            })}
                        />
                        {errors.surname && errors.surname.type === "required" && (
                            <p className="invalidInputLogin">Campo requerido.</p>
                        )}
                        {errors.surname && errors.surname.type === "maxLength" && (
                            <p className="invalidInputLogin">No puede contener más de 40 caracteres.</p>
                        )}
                    </div>
                </div>
                <div className="campoFormRegister">
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
                    {errors.email && errors.email.type === "required" && (
                        <p className="invalidInputLogin">Correo requerido</p>
                    )}
                    {errors.email && errors.email.type === "pattern" && (
                        <p className="invalidInputLogin">Correo invalido</p>
                    )}
                    {errors.email && errors.email.type === "maxLength" && (
                        <p className="invalidInputLogin">No puede contener más de 40 caracteres</p>
                    )}
                </div>
                <div className='dobleCampoFormRegister'>
                    <div className="campoFormRegister">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            autoComplete='new-password'
                            id='password'
                            type="password"                            
                            maxLength="25"
                            className="form-control"
                            {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 25,
                            })}
                        />
                        {errors.password && errors.password.type === "required" && (
                            <p className="invalidInputLogin">Campo requerido.</p>
                        )}
                        {errors.password && errors.password.type === "minLength" && (
                            <p className="invalidInputLogin">Debe contener al menos 6 caracteres.</p>
                        )}
                        {errors.password && errors.password.type === "maxLength" && (
                            <p className="invalidInputLogin">No puede contener más de 25 caracteres.</p>
                        )}
                    </div>
                    <div className="campoFormRegister">
                        <label htmlFor="passwordConfirm">Confirma tu contraseña</label>
                        <input
                            id='passwordConfirm'
                            autoComplete='new-password'
                            type='password'
                            className="form-control"
                            {...register("passwordConfirm", {
                                required: true,
                                validate: value => value === watch('password') || "Las contraseñas no coinciden.",
                                maxLength: 25
                            })}
                        />
                        {errors.passwordConfirm && errors.passwordConfirm.type === "required" && (
                            <p className="invalidInputLogin">Campo requerido.</p>
                        )}
                        {errors.passwordConfirm && errors.passwordConfirm.type === "maxLength" && (
                            <p className="invalidInputLogin">No puede contener más de 25 caracteres.</p>
                        )}
                        {errors.passwordConfirm && errors.passwordConfirm.type === "validate" && (
                            <p className="invalidInputLogin">{errors.passwordConfirm.message}</p>
                        )}
                    </div>
                </div>
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
                                Crear cuenta
                            </span>
                            </>
                        )}
                    </button>
                </div>
            </form>
        </>
    )
}

export default RegisterForm