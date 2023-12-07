import React from 'react'
import './etapaCompetencia.css'
import { useParams } from 'react-router-dom'
import dificultadIcon from '../../assets/dificultadIcon.png'
import ejercicioIcon from '../../assets/ejercicioIcon.png'
import estadoIcon from '../../assets/estadoIcon.png'
import repeticionesIcon from '../../assets/repeticionesIcon.png'
import seriesIcon from '../../assets/seriesIcon.png'
import tiempoIcon from '../../assets/tiempoIcon.png'

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
                        <iframe src="https://www.youtube.com/embed/TL8SMp7RdXQ?si=tVDTQpXOsJ3vXvV-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
                <div className='textoInfoEtapaCompetencia'>
                    <h3>Información</h3>
                    <ul>
                        <li>
                            <img src={ejercicioIcon} alt="" />
                            <span>Ejercicio</span>
                            <b>
                                Nombre
                            </b>
                        </li>
                        <li>
                            <img src={dificultadIcon} alt="" />
                            <span>Dificultad</span>
                            <b>
                                Fácil
                            </b>
                        </li>
                        <li>
                            <img src={repeticionesIcon} alt="" />
                            <span>Repeticiones</span>
                            <b>
                                1914
                            </b>
                        </li>
                        <li>
                            <img src={seriesIcon} alt="" />
                            <span>Series</span>
                            <b>
                                1
                            </b>
                        </li>
                        <li>
                            <img src={tiempoIcon} alt="" />
                            <span>Tiempo</span>
                            <b>
                                10 Minutos
                            </b>
                        </li>
                        <li>
                            <img src={estadoIcon} alt="" />
                            <span>Estado</span>
                            <b>
                                Disponible
                            </b>
                        </li>
                    </ul>
                    <div>
                        <a href="/">
                            <button>INICIAR</button>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    </>
    )
}

export default EtapaCompetencia
