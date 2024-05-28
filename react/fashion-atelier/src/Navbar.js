import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';

function Navbar({ onSearch, onScrollTo, contatoRef, sobreRef }) {
  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  const handleScrollClick = (ref) => (event) => {
    event.preventDefault();
    onScrollTo(ref);
  };

  return (
    <div className="navbar">
      <div className="header-inner-content">
        <img className="logo" src="/assets/Imagens/Icones/logo.jpg" alt="Logo" />
        <nav>
          <div className="search-box">
            <input
              type="text"
              className="search-text"
              placeholder="Busque seu estilo..."
              onChange={handleInputChange}
            />
            <a href="#" className="search-button">
              <img
                src="/assets/Imagens/Icones/lupa.svg"
                alt="lupa"
                height="20"
                width="20"
              />
            </a>
          </div>
        </nav>

        <div className="nav-icons">
          <Link to="/" className="home">Home</Link>
          <a href="#" className="contato" onClick={handleScrollClick(contatoRef)}>Contato</a>
          <a href="#" className="sobre" onClick={handleScrollClick(sobreRef)}>Sobre</a>
          <img
            className="sacola"
            src="/assets/Imagens/Icones/sacola.png"
            alt="sacola"
          />
          <img
            className="perfil"
            src="/assets/Imagens/Icones/perfil.png"
            alt="perfil"
          />
          <img
            className="adicional"
            src="/assets/Imagens/Icones/adicional.png"
            alt="adicional"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
