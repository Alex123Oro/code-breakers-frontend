import React from 'react';
import './jugador.css';

const HistorialJugador = ({ partidas }) => {
  return (
    <div className="seccion-jugador">
      <h3>Historial de Partidas</h3>
      <ul>
        {partidas.map((partida, indice) => (
          <li key={indice}>
            {partida.fecha} - {partida.resultado} - Puntos: {partida.puntos}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistorialJugador;