import React from 'react'
import '../assets/css/home.css';
import Footer from './components/Footer'
import Home2 from './components/home/Home2'
import Home3 from './components/home/Home3'
import Home4 from './components/home/Home4'
import Home5 from './components/home/Home5'

const Home = () => {
  return (
    <div>
      <div className="home-1">
        <div className='home1-content'>
          <h1>¡Bienvenido a StorySphere!</h1>
          <p>Sumérgete en un universo de historias ilimitadas. Escribe, comparte y descubre mundos nuevos con nuestra vibrante comunidad de narradores. ¡Explora ahora y deja que tu imaginación vuele libremente!</p>
          <button><a href="">¡Empieza ya!</a></button>
        </div>
      </div>
      <div className='container'>
        <div className='home'>

          {/* body-2 */}
          <Home2 />

          {/* body-3 */}
          <Home3 />

          {/* body-4 */}
          <Home4 />

          {/* body-5 */}
          <Home5 />

        </div>


        <Footer />
      </div>
    </div>
  )
}

export default Home
