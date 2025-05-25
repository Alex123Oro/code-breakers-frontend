import React from 'react';
import './jugador.css';

const PerfilJugador = ({ urlAvatar, nombre, nivel }) => {
  return (
    <div className="seccion-jugador">
      <img src={urlAvatar} alt="Avatar" className="avatar-jugador" />
      <h2>{nombre}</h2>
      <p>Nivel: {nivel}</p>
    </div>
  );
};

export default PerfilJugador;
