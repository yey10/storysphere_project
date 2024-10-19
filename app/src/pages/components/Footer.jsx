import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import ReactImg3 from '../../assets/img/StorySphere.png';
import '../../assets/css/footer.css';

const Footer = () => {
  return (
    <div>
          <div class="footer">
            <div class="footer-content">
                <div>
                    <div><span class="material-symbols-outlined">location_on</span><span>Encuentranos</span><p>Lorem ipsum dolor sit amet.</p></div>
                    <div><span class="material-symbols-outlined">call</span><span>Llamanos</span><p>Lorem ipsum dolor sit amet.</p></div>
                    <div><span class="material-symbols-outlined">mail</span><span>Escribenos</span><p>Lorem ipsum dolor sit amet.</p></div>
                </div>
                <div>
                    <div>
                        <img src={ReactImg3} alt="StorySphere" />
                        <p>Una plataforma web que permite a los usuarios subir, leer y comentar historias, facilitando la interacción entre ellos y fomentando la creatividad literaria.</p>
                        <span>Siguenos</span>
                        <div>
                            <a href=""><i class="fa-brands fa-facebook-f"></i></a>
                            <a href=""><i class="fa-brands fa-x-twitter"></i></a>
                            <a href=""><i class="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                    <div>
                        <span>Enlaces útiles</span>
                        <ul>
                            <li><a href="">Inicio</a></li>
                            <li><a href="">Servicios</a></li>
                            <li><a href="">Contacto</a></li>
                            <li><a href="">Autores</a></li>
                            <li><a href="">Nosotros</a></li>
                            <li><a href="">Categorías</a></li>
                            <li><a href="">Equipo</a></li>
                            <li><a href="">Terminos</a></li>
                            <li><a href="">Privacidad</a></li>
                            <li><a href="">Política</a></li>
                        </ul>
                    </div>
                    <div>
                        <span>Escríbenos</span>
                        <p>Si quieres enviarnos un mensaje a nuestro WhatsApp de contacto, haslo aquí</p>
                        <input type="text" value="+57 314 782 1614" disabled /><a href="https://wa.me/+573147821614"><i class="fa fa-whatsapp" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
            <div class="footer-end">
              <p>Copiright © 2024, All right Reserved StorySphere</p>
            </div>
          </div>


        <Outlet />
    </div>
  )
}

export default Footer
