import React from 'react'
import './etapaCompetencia.css'
import { useParams } from 'react-router-dom'

function EtapaCompetencia() {
    
    const { id } = useParams()
    console.log(id);

    return (
    <>
    <h1>Etapa</h1>
    </>
    )
}

export default EtapaCompetencia
