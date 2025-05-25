import React from 'react';
import PerfilJugador from './PerfilJugador';
import EstadisticasJugador from './EstadisticasJugador';
import HistorialJugador from './HistorialJugador';
import './jugador.css';

const PanelJugador = () => {
  const partidas = [
    { fecha: '2025-05-25', resultado: 'Victoria', puntos: 1200 },
    { fecha: '2025-05-24', resultado: 'Derrota', puntos: 800 },
    { fecha: '2025-05-23', resultado: 'Victoria', puntos: 1500 },
  ];

  return (
    <div className="panel-jugador">
      <PerfilJugador 
        urlAvatar="https://via.placeholder.com/100" 
        nombre="Jugador1" 
        nivel={10} 
      />
      <EstadisticasJugador puntuacion={1200} vida={75} energia={60} />
      <HistorialJugador partidas={partidas} />
    </div>
  );
};

export default PanelJugador;