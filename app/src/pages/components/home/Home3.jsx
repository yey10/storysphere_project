import React from 'react'
import { Link } from 'react-router-dom'
import '../../../assets/css/home3.css';
import ReactImg1 from '../../../assets/img/CF1.png';
import ReactImg2 from '../../../assets/img/CF3.png';
import ReactImg3 from '../../../assets/img/CF3.png';


const Home3 = () => {
  return (
    <div>
        <div class="home-3">
            <h3>¿Cómo funciona?</h3>
            <div class="home3-content">
              <div>
                <img src={ReactImg1} alt="Escribir" />
                <p>Puedes Escribir</p>
                <p>Ofrecemos una amplia gama de herramientas de escritura que puedes aprovechar sin importar tu nivel de escritura.</p>
              </div>
              <div>
                <img src={ReactImg2} alt="Leer" />
                <p>Puedes Leer</p>
                <p>Ofrecemos una galería de historias creadas por otros usuarios que puedes leer y disfrutar tanto como quieras.</p>
              </div>
              <div>
                <img src={ReactImg3} alt="Interactuar" />
                <p>Puedes Interactuar</p>
                <p>También puedes contactar con otros usuarios de tus mismos gustos e incluso hablar con tus autores favoritos.</p>
              </div>
            </div>
            <a href="">¡ INICIA AHORA !</a>
            <h3>¡Completamente Gratis!</h3>
        </div>
    </div>
  )
}

export default Home3
