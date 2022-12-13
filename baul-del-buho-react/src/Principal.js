import React from 'react';
import './index.css';
import Carrusel from './components/Carrusel';
import Cards from './components/Cards';
import Proyectos from './Proyectos';

function Principal ({proyectos}) {
  return (
    <div>
      <Carrusel />
      <Cards />
      <h2>Proyectos recientes</h2>
      <Proyectos proyectos={proyectos} />
    </div>
  )
}

export default Principal;
