import React from 'react';
import './eventos.css';

const Eventos = ({ events }) => {
    return (
        <div className="Eventos">
            {
                events.map((event, index) => (
                    <a className="EventosEvent" href={event.link} target='__blank' key={`event-${index + 1}`}>
                        <div className="EventosEventIcon">
                            <img src={event.icon} alt={event.title} />
                        </div>
                        <div className="EventosEventDetails">
                            <h3>{event.title}</h3>
                            <p>{event.description}</p>
                            <span>Inscribirse</span>
                        </div>
                    </a>
                ))
            }
        </div>
    )
}

export default Eventos