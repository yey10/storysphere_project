import React from 'react'
import '../assets/css/services.css';
import Footer from './components/Footer';

const Services = () => {
  return (
    <div>

        <div className="services">
          <h1>Elige tu plan de suscripción</h1>
          <div className="box">
            <div className="box-content">
              <h2>Estándar</h2>
              <p>Perfecto para empezar</p>
              <p>4.99$<small>/mes</small></p>
              <ul>
                <li><span class="material-symbols-outlined">check</span>Mejor almacenamiento de historias</li>
                <li><span class="material-symbols-outlined">check</span>Mejor espacio de creación</li>
                <li><span class="material-symbols-outlined">check</span>Icono especial</li>
              </ul>
              <button><a href="">Suscribirse</a></button>
            </div>

            <div className="box-content">
              <h2>Medium</h2>
              <p>Ideal para los creadores</p>
              <p>9.99$<small>/mes</small></p>
              <ul>
                <li><span class="material-symbols-outlined">check</span>Mejor almacenamiento de historias</li>
                <li><span class="material-symbols-outlined">check</span>Mejor espacio de creación</li>
                <li><span class="material-symbols-outlined">check</span>Más herramientas de creación</li>
                <li><span class="material-symbols-outlined">check</span>Acceso a descargas</li>
                <li><span class="material-symbols-outlined">check</span>Icono especial</li>
              </ul>
              <button><a href="">Suscribirse</a></button>
            </div>

            <div className="box-content">
              <h2>Premium</h2>
              <p>Exelente Para los profesionales</p>
              <p>14.99$<small>/mes</small></p>
              <ul>
                <li><span class="material-symbols-outlined">check</span>Más recursos de creación</li>
                <li><span class="material-symbols-outlined">check</span>Acceso a contenido Premium</li>
                <li><span class="material-symbols-outlined">check</span>Acceso a descargas más amplias</li>
                <li><span class="material-symbols-outlined">check</span>Gran almacenamiento de historias</li>
                <li><span class="material-symbols-outlined">check</span>Gran espacio de creación</li>
                <li><span class="material-symbols-outlined">check</span>Icono super especial</li>
              </ul>
              <button><a href="">Suscribirse</a></button>
            </div>
          </div>
        </div>

      <div className='container'>

        <Footer />
        
      </div>
    </div>
  )
}

export default Services
