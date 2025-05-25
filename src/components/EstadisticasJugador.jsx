import React from 'react';
import './jugador.css';

const EstadisticasJugador = ({ puntuacion, vida, energia }) => {
  return (
    <div className="seccion-jugador">
      <h3>Estadísticas</h3>
      <p>Puntuación: {puntuacion}</p>
      <div className="barra">
        <span style={{ width: `${vida}%`, backgroundColor: '#e74c3c' }}></span>
      </div>
      <p>Vida: {vida}%</p>
      <div className="barra">
        <span style={{ width: `${energia}%`, backgroundColor: '#3498db' }}></span>
      </div>
      <p>Energía: {energia}%</p>
    </div>
  );
};

export default EstadisticasJugador;