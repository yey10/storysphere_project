import React from 'react'
import '../assets/css/about.css';
import Logo from '../assets/img/Logo.png';
import Footer from './components/Footer';
import About2 from './components/about/About2';
import About3 from './components/about/About3';
import About4 from './components/about/About4';
import About5 from './components/about/About5';
import About6 from './components/about/About6';

const About = () => {
  return (
    <div>
      <div className="about-1">
        <div className='about1-content'>
          <div className='blur'></div>
          <img src={Logo} alt="Logo" />
          <h1>Donde las historias cobran vida</h1>
        </div>
      </div>
      <div className='container'>
        <div className="about">
          
          {/** about-2 */}
          <About2 />

          {/** about-3 */}
          <About3 />

          {/** about-4 */}
          <About4 />

          {/** about-5 */}
          <About5 />

          {/** about-6 */}
          <About6 />


        </div>

        <Footer />
      </div>
    </div>
  )
}

export default About
