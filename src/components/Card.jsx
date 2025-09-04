import React from 'react';

const Card = ({ nombre, linkedin, github, descripcion }) => {
  const cardBgColor = {
    backgroundColor: '#0084FF', // Fondo de la card en azul claro
    borderColor: '#00041A' // Borde en azul oscuro para contraste
  };
  const linkTextColor = {
    color: '#FFB718', // Enlaces en amarillo para destacar
    textDecoration: 'none'
  };
  const avatarUrl = `https://robohash.org/${nombre}?set=set5`; // Avatar aleatorio basado en el nombre

  return (
    <div className="card text-white border-2 rounded-3 shadow-lg" style={cardBgColor}>
      <div className="row g-0">
        <div className="col-md-4 d-flex align-items-center justify-content-center p-3">
          <img 
            src={avatarUrl} 
            className="img-fluid rounded-circle border border-white border-3" // Borde blanco para el avatar
            alt={`Avatar de ${nombre}`} 
            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body d-flex flex-column h-100 justify-content-between">
            <div>
              <h5 className="card-title text-start fs-4 fw-bold mb-2">{nombre}</h5>
              <p className="card-text text-start">{descripcion}</p> {/* Color de texto por defecto blanco */}
            </div>
            <div className="mt-auto pt-3 border-top border-light text-start"> {/* Borde superior claro */}
              <a href={`https://linkedin.com/in/${linkedin}`} target="_blank" rel="noopener noreferrer" 
                 className="me-3 fw-bold" style={linkTextColor}>
                <i className="bi bi-linkedin me-1"></i> LinkedIn
              </a>
              <a href={`https://github.com/${github}`} target="_blank" rel="noopener noreferrer" 
                 className="fw-bold" style={linkTextColor}>
                <i className="bi bi-github me-1"></i> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;