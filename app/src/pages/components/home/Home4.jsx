import React from 'react'
import { Link } from 'react-router-dom'
import '../../../assets/css/home4.css';
import ReactImg1 from '../../../assets/img/Accion.jpeg';
import ReactImg2 from '../../../assets/img/Drama.jpeg';
import ReactImg3 from '../../../assets/img/Ficcion.jpeg';
import ReactImg4 from '../../../assets/img/Misterio.jpeg';
import ReactImg5 from '../../../assets/img/Romance.jpeg';
import ReactImg6 from '../../../assets/img/Terror.jpeg';

const Home4 = () => {
  return (
    <div>
        <div class="home-4">
            <h3>La categoría que quieras a tu alcance</h3>
            {/* slider de categorias */}
            <div class="categorias">
              <div><img src={ReactImg1} alt="Acción" /><div><h4>Acción</h4><button><a href="">Saber más</a></button></div></div>
              <div><img src={ReactImg2} alt="Drama" /><div><h4>Drama</h4><button><a href="">Saber más</a></button></div></div>
              <div><img src={ReactImg3} alt="Ficción" /><div><h4>Ficción</h4><button><a href="">Saber más</a></button></div></div>
              <div><img src={ReactImg4} alt="Misterio" /><div><h4>Misterio</h4><button><a href="">Saber más</a></button></div></div>
              <div><img src={ReactImg5} alt="Romance" /><div><h4>Romance</h4><button><a href="">Saber más</a></button></div></div>
              <div><img src={ReactImg6} alt="Terror" /><div><h4>Terror</h4><button><a href="">Saber más</a></button></div></div>
            </div>
        </div>
    </div>
  )
}

export default Home4
