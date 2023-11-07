import React from 'react'

const Carousel = ({ imgs }) => {
    return (
        <div id="carouselExample" className="carousel slide" data-bs-pause="off">
            <div className="carousel-inner">
                {
                    imgs.map((img) => (
                        <div className="carousel-item active">
                            <img src={img.img} className="d-block w-100" alt={img.alt} />
                        </div>
                    ))
                }
            </div>
            {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button> */}
        </div>
    )
}

export default Carousel