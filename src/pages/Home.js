import React from 'react';
import BannerMain from '../3DBanner';


const Home = () => {
  return (
    <div className="home my-5">
      {/* <div className="container-fluid mc-portfolio-header-container-absolute">
        <div className="row">
          <div className="col-12 mx-0 px-0">
            <div className="mc-portfolio-header-title-container">
              <h1 className="mc-portfolio-header-title animated-title">MARTIN COSENTINO</h1>
            </div>
          </div>
        </div>
      </div> */}

      {/* Container Escena 3D */}
      <div className='container'>
        <div className='row'>

          <div className='col-lg-7 d-flex justify-content-center align-items-start flex-column'>

            <h2 className='mc-portfolio-header-title animated-title'>
              Hola, soy <span> Martín Cosentino.</span>
            </h2>
            <p className="mc-portfolio-header-subtitle"> Transformo ideas en experiencias digitales. </p>

          </div>
          <div className='col-lg-5'>

            {/* Escena 3D */}
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
