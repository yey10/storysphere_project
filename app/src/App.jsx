import { Link, Outlet, useNavigate } from 'react-router-dom';
import ReactImg1 from './assets/img/logo.jpeg';
import ReactImg2 from './assets/img/profile.jpg';
import ReactImg3 from './assets/img/StorySphere.png';
import {  useAuth } from './AuthContext';
import './App.css';
import { useEffect } from 'react';

function App() {


  const { isAuthenticated } = useAuth();  // Obtener el estado de autenticación
  const navigate = useNavigate();

  useEffect(() =>{
      // Redirigir a la página de login si el usuario no está autenticado

      if (!isAuthenticated) {
        navigate('/login');
      }
  }, [ isAuthenticated, navigate]);  // Agregar navigate como dependencia para que se ejecute cada vez











  return (
    <div>
      <div className="header">
          {/* navbar */}
          <div className="navbar">
            <div><img src={ReactImg3} alt="StorySphere" /></div>
            <ul>
              <li><Link to="/premium"><span className="material-symbols-outlined">bookmark_star</span> Premium</Link></li>
              <li>
                <input type="text" placeholder="Buscar" id="search" />
                <span className="material-symbols-outlined">search</span>
              </li>
            </ul>
          </div>
          {/* sidebar */}
          <div className="sidebar">
            <div className="sidebar-header">
              <img src={ReactImg1} alt="logo" />
              <h2>StorySphere</h2>
            </div>
            <ul className="sidebar-links">
              <h4><span>Main Menu</span><div className="separator"></div></h4>
              <li><Link to="/"><span className="material-symbols-outlined">home</span>Home</Link></li>
              <li><Link to="/about"><span className="material-symbols-outlined">contact_page</span>Nosotros</Link></li>
              <li><Link to="/contact"><span className="material-symbols-outlined">call</span>Contacto</Link></li>
              <li><Link to="/services"><span className="material-symbols-outlined">view_cozy</span>Servicios</Link></li>
              <h4><span>General</span><div className="separator"></div></h4>
              <li><Link to="/histories"><span className="material-symbols-outlined">menu_book</span>Historias</Link></li>
              <li><Link to="/authors"><span className="material-symbols-outlined">person_edit</span>Autores</Link></li>
              <li><Link to="/categories"><span className="material-symbols-outlined">category</span>Categorías</Link></li>
              <li><Link to="/comunidades"><span className="material-symbols-outlined">groups</span>Comunidades</Link></li>
              <h4><span>Account</span><div className="separator"></div></h4>
              <li><Link to="/profile"><span className="material-symbols-outlined">account_circle</span>Perfil</Link></li>
              <li><Link to="/help"><span className="material-symbols-outlined">question_mark</span>Ayuda</Link></li>
              <li><Link to="/settings"><span className="material-symbols-outlined">settings</span>Opciones</Link></li>
              <li><Link to="/logout"><span className="material-symbols-outlined">logout</span>Logout</Link></li>
            </ul>
            <div className="user-account">
              <div className="user-profile">
                <img src={ReactImg2} alt="profile" />
                <div className="user-detail">
                  <h3>Eva Murphy</h3>
                  <span>Web Developer</span>
                </div>
              </div>
            </div>
          </div>
      </div>

        {/*  main content */}


        {/* footer */}


      
      <Outlet />
    </div>
  );
}

export default App;
