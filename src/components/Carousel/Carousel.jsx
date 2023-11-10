import React from 'react'
import './carousel.css'

const Carousel = ({ imgs }) => {
    return (
        <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade" data-bs-pause="off" data-bs-ride="carousel">
            <div className="carousel-inner">
                {
                    imgs.map((img, index) => (
                        <div className="carousel-item active" key={`img-${index + 1}`}>
                            <img src={img.img} className="d-block w-100" alt={img.alt} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Carousel