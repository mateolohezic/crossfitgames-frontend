import React from 'react'
import './etapaCompetencia.css'
import { useParams } from 'react-router-dom'

function EtapaCompetencia() {
    
    const { id } = useParams()
    console.log(id);

    return (
    <>
        <main>
            <header className='portadaEtapaCompetencia'>
                <h1>Etapa #1</h1>
                <h2>Nombre del ejercicio</h2>
            </header>
            <section className='infoEtapaCompetencia'>
                <div className='videoInfoEtapaCompetencia'>
                    <div>
                        <iframe src="https://www.youtube.com/embed/TL8SMp7RdXQ?si=tVDTQpXOsJ3vXvV-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
                <div className='textoInfoEtapaCompetencia'>
                    <h3>Información</h3>
                    <ul>
                        <li>
                            <b>Ejercicio:</b>
                            <span>
                                Nombre
                            </span>
                        </li>
                        <li>
                            <b>Dificultad:</b>
                            <span>
                                Fácil
                            </span>
                        </li>
                        <li>
                            <b>Repeticiones:</b>
                            <span>
                                1914
                            </span>
                        </li>
                        <li>
                            <b>Series:</b>
                            <span>
                                1
                            </span>
                        </li>
                        <li>
                            <b>Tiempo:</b>
                            <span>
                                10 Minutos
                            </span>
                        </li>
                        <li>
                            <b>Estado:</b>
                            <span>
                                Disponible
                            </span>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    </>
    )
}

export default EtapaCompetencia
