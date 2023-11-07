import React from 'react'
import './home.css'
import Carousel from '../../components/Carousel/Carousel';
import cf1 from '../../assets/cf1.webp'
import cf2 from '../../assets/cf2.webp'
import cf3 from '../../assets/cf3.webp'
import cf4 from '../../assets/cf4.webp'

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
                {/* <Carousel imgs={wallpapers} /> */}
                <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade" data-bs-pause="off" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={cf1} className="d-block" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={cf2} className="d-block" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={cf3} className="d-block" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={cf4} className="d-block" alt="..." />
                        </div>
                    </div>
                </div>
                <div className="portada-overlay">
                    <div className="container">
                        <div className="row contenidoPortada">
                            <div className="col-12 col-md-6">
                                <h1>Bienvenido a CrossFit Games Tucumán</h1>
                                <h4>Subtítulo para CrossFit Games</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita repellendus quod fugiat consequuntur maiores vel, cumque ex nostrum tempore debitis!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
