import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import './sponsorsForm.css'

const SponsorsForm = () => {
    const [customSubmitData, setCustomSubmitData] = useState()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [parent, enableAnimations] = useAutoAnimate()

    const customSubmit = (data) => {
        setCustomSubmitData(data)
        return alert('Your info has been sent successfully :)')
    }

    return (
        <form className='sponsorsForm' onSubmit={handleSubmit(customSubmit)} ref={parent}>
            <div className="sponsorsFormOverlay">
                <div className="container">
                    <h1>¡Regístrate como sponsor!</h1>
                    <h4>Trabaja con nosotros</h4>
                    <div className="row row-cols-1 row-cols-lg-2">
                        <div className="col">
                            <div className="sponsorInputContainer">
                                <label htmlFor="sponsorName">Nombre</label>
                                <input {...register('sponsorName', {
                                    required: true
                                })} name='sponsorName' type="text" />
                                {errors.sponsorName?.type === "required" && <span>El nombre no puede estar vacío</span>}
                            </div>
                        </div>
                        <div className="col">
                            <div className="sponsorInputContainer">
                                <label htmlFor="sponsorEmail">Correo Electrónico</label>
                                <input {...register('sponsorEmail', {
                                    required: true,
                                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                                    maxLength: 50,
                                })} name='sponsorEmail' type="email" />
                                {errors.sponsorEmail?.type === "required" && <span>El correo electrónico no puede estar vacío</span>}
                                {errors.sponsorEmail?.type === "pattern" && <span>El email no puede estar vacío</span>}
                                {errors.sponsorEmail?.type === "maxLength" && <span>El email no puede tener más de 50 caracteres</span>}
                            </div>
                        </div>
                        <div className="col">
                            <div className="sponsorInputContainer">
                                <label htmlFor="sponsorTel">Teléfono</label>
                                <input {...register('sponsorTel', {
                                    required: true
                                })} name='sponsorTel' type="tel" />
                                {errors.sponsorTel?.type === "required" && <span>El número de teléfono no puede estar vacío</span>}
                            </div>
                        </div>
                        <div className="col">
                            <div className="sponsorInputContainer">
                                <label htmlFor="sponsorEnterprise">Empresa</label>
                                <input {...register('sponsorEnterprise')} name='sponsorEnterprise' type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="row-cols-1">
                        <div className="col">
                            <div className="sponsorInputContainer">
                                <label htmlFor="sponsorCategory">Categoría de la Industria</label>
                                <input {...register('sponsorCategory')} name='sponsorCategory' type="text" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="sponsorInputContainer">
                                <label htmlFor="sponsorComment">Cuentanos como te gustaría participar</label>
                                <textarea {...register('sponsorComment', {
                                    required: true,
                                })} name="sponsorComment" maxLength={144} id="sponsorComment" placeholder='¡Hola!, Me gustaría ...'></textarea>
                                {errors.sponsorComment?.type === "required" && <span>Este campo es obligatorio</span>}
                            </div>
                        </div>
                    </div>
                    <button className='sponsorsFormButton' type="submit">Enviar</button>
                </div>
                <div className="sponsorsFormFooterGradient">
                </div>
            </div>
        </form>
    )
}

export default SponsorsForm