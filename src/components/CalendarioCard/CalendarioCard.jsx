import React from 'react';
import '../CalendarioCard/calendarioCard.css';

const CalendarioCard = ({ cabecera, fecha, titulo, descripcion, link, invite }) => {
    return (
        <div className="calendarioCard">
            <div className="calendarioCardHeader">
                <h5>{cabecera}</h5>
                {invite && <h6>Solo con invitación</h6>}
            </div>
            <div className="calendarioCardContent">
                <div className="calendarioCardMain">
                    <span>{fecha}</span>
                    <h3>{titulo}</h3>
                    <p>{descripcion}</p>
                </div>
                <div className="calendarioCardFooter">
                    <div className='calendarioCardFooterLink'>
                        <a href={link}>Ver más</a>
                        <span className='calendarioCardFooterLinkUnderline'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CalendarioCard