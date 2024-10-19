import React from 'react'
import '../assets/css/contact.css';
import Footer from './components/Footer';

const Contact = () => {
  return (
    <div>
        <div class="contact">
            <div class="box-info">
                <h1>CONTÁCTE CON NOSOTROS</h1>
                <div class="data">
                    <p><i class="fa-solid fa-phone"></i> +57 314 7821614</p>
                    <p><i class="fa-solid fa-envelope"></i> StorySphere@gmail.com</p>
                </div>
                <div class="links">
                    <a href=""><i class="fa-brands fa-facebook-f"></i></a>
                    <a href=""><i class="fa-brands fa-instagram"></i></a>
                    <a href=""><i class="fa-brands fa-x-twitter"></i></a>
                </div>
            </div>
            <form action="">
                <div class="input-box">
                    <input type="text" required placeholder="Nombre y apellido" />
                    <i class="fa-solid fa-user"></i>
                </div>
                <div class="input-box">
                    <input type="email" required placeholder="Correo electronico" />
                    <i class="fa-solid fa-envelope"></i>
                </div>
                <div class="input-box">
                    <input type="text" required placeholder="Asunto" />
                    <i class="fa-solid fa-pen-to-square"></i>
                </div>
                <div class="input-box">
                    <textarea cols="30" rows="10" placeholder="Escribe tu mensaje" />
                </div>
                <button type="submit">Enviar mensaje</button>
            </form>
        </div>

        <div className="container">
            <Footer />
        </div>
    </div>
  )
}

export default Contact
