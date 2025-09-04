import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import perfilesData from './data/data.json'; 

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="row g-4 justify-content-center">
          {perfilesData.map((perfil, index) => (
            // Aumentamos el tamaño de la columna para que la card horizontal se vea bien
            <div className="col-12 col-md-8 col-lg-6" key={index}> 
              <Card
                nombre={perfil.nombre}
                linkedin={perfil.linkedin}
                github={perfil.github}
                descripcion={perfil.descripcion}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;