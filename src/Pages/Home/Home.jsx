import React from 'react'
import './home.css'
import Carousel from '../../components/Carousel/Carousel';
import cf1 from '../../assets/cf1.webp'
import cf2 from '../../assets/cf2.webp'
import cf3 from '../../assets/cf3.webp'
import cf4 from '../../assets/cf4.webp'
import Eventos from '../../components/Eventos/Eventos';
import { calendarEvents } from '../../helpers/calendar';
import CalendarioCard from '../../components/CalendarioCard/CalendarioCard';

const wallpapers = [
    {
        img: cf1,
        alt: 'CrossFit-Games-1'
    },
    {
        img: cf2,
        alt: 'CrossFit-Games-2'
    },
    {
        img: cf3,
        alt: 'CrossFit-Games-3'
    },
    {
        img: cf4,
        alt: 'CrossFit-Games-4'
    },
]

function Home() {
    return (
        <>
            <section className="portada">
                <Carousel imgs={wallpapers} />
                <div className="portadaOverlay">
                    <div className="container h-100">
                        <div className="row contenidoPortada">
                            <div className="col-12 col-lg-6">
                                <h1>Bienvenido a CrossFit Games Tucumán</h1>
                                <h4>Subtítulo para CrossFit Games</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita repellendus quod fugiat consequuntur maiores vel, cumque ex nostrum tempore debitis!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <h2 className='eventosTitulo'>Eventos Próximos</h2>
            <Eventos events={calendarEvents} />
            <section className="calendario">
                <div className="calendarioTitulo">
                    <h4>Calendario</h4>
                    <h2>Temporada 2024</h2>
                </div>
                <div className="calendarioCards">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-lg-2">
                            <div className="col">
                                <CalendarioCard
                                    cabecera="Games Season"
                                    titulo="Torneo CrossFit Provincial"
                                    fecha="Enero 21 - 24"
                                    descripcion="lorem ipsum askdfj asoidja askda dkdmkvm asdhfuruuwo osodd"
                                    link="https://google.com"
                                    invite={false}
                                />
                            </div>
                            <div className="col">
                                <CalendarioCard
                                    cabecera="Games Season 2"
                                    titulo="Torneo CrossFit Nacional"
                                    fecha="Junio 16 - 20"
                                    descripcion="lorem ipsum askdfj asoidja askda dkdmkvm asdhfuruuwo osodd"
                                    link="https://google.com"
                                    invite={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
