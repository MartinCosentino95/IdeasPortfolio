import React, { useEffect, useRef } from 'react';
import BannerMain from '../3DBanner';
import gsap from 'gsap';



const Home = () => {
  const starsContainer = useRef(null);

  useEffect(() => {

    // Animación titulo
    gsap.from(".mc-portfolio-header-title", {

      opacity: 0,
      duration: 1.5,
      delay: 1,
      ease: "power2.in",
    })

    // Animación titulo
    gsap.from(".mc-portfolio-header-subtitle", {
      opacity: 0,
      duration: 1.5,
      delay: 2,
      ease: "power4.in",
    })

    // Sección estrellas
    const createStars = () => {
      const container = starsContainer.current;
      const numStars = 100; // Número de estrellas

      for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Posición aleatoria
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.width = `${Math.random() * 4 + 2}px`;
        star.style.height = star.style.width;

        container.appendChild(star);

        // Animación de parpadeo con GSAP
        gsap.to(star, {
          opacity: Math.random(),
          duration: Math.random() * 2 + 1,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut"
        });
      }
    };

    createStars();
  }, []);

  return (
    <div className="home my-5 position-relative">
      {/* Contenedor de estrellas */}
      <div ref={starsContainer} className="stars-container"></div>

      {/* Contenido */}
      <div className='container'>
        <div className='row'>
          <div className='col-lg-7 d-flex justify-content-center align-items-start flex-column'>
            <h2 className='mc-portfolio-header-title'>
              Hola, soy <span> Martín Cosentino.</span>
            </h2>
            <p className="mc-portfolio-header-subtitle">
              Transformo ideas en experiencias digitales.
            </p>
          </div>
          <div className='col-lg-5'>
            <div style={{ width: '100%', height: '500px' }}>
              <BannerMain />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
