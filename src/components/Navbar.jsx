import React from 'react';
import logo from '../assets/4geeks.png'; // Asegúrate de tener el logo en esta ruta o ajusta la ruta según sea necesario

const Navbar = () => {
  const customBgStyle = {
    backgroundColor: '#0084FF'
  };

  return (
    <nav className="navbar navbar-expand-lg" style={customBgStyle}>
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={logo} alt="4Geeks Academy Logo" height="40" className="me-2" />
          <span className="fw-bold text-white">4Geeks Academy</span>
        </a>
        <span className="navbar-text ms-auto fs-5 fw-bold text-white">
          Nuestra Galería de Perfiles
        </span>
      </div>
    </nav>
  );
};

export default Navbar;