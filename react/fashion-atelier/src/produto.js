import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './produto.css';

function App() {
  return (
    <>
      <div className="navbar">
        <div className="header-inner-content">
          <img className="logo" src="/assets/Imagens/Icones/logo.jpg" alt="logo" />
          <nav>
            <div className="search-box">
              <input type="text" className="search-text" placeholder="Busque seu estilo..." />
              <a href="#" className="search-button">
                <img src="/assets/Imagens/Icones/lupa.svg" alt="lupa" height="20" width="20" />
              </a>
            </div>
          </nav>

          <div className="nav-icons">
            <p className="home">Home</p>
            <p className="contato">Contato</p>
            <p className="sobre">Sobre</p>
            <img className="sacola" src="/assets/Imagens/Icones/sacola.png" alt="sacola" />
            <img className="perfil" src="/assets/Imagens/Icones/perfil.png" alt="perfil" />
            <img className="adicional" src="/assets/Imagens/Icones/adicional.png" alt="adicional" />
          </div>
        </div>
      </div>

      <div>
        <h1 className="promocao">PROMOÇÃO IMPERDÍVEL - ATÉ 50% DE DESCONTO - PROMOÇÃO IMPERDÍVEL - ATÉ 50% DE DESCONTO - PROMOÇÃO IMPERDÍVEL - ATÉ 50% DE DESCONTO- PROMOÇÃO IM</h1>
      </div>

      <div>
        <h1 className="blusas">Blusas:</h1>
        <div>
          <img className="blusa1" src="/assets/Imagens/Roupas/6.jpg" alt="blusa1" width="300" height="200" />
        </div>

        <div>
          <img className="blusa2" src="/assets/Imagens/Roupas/7.jpg" alt="blusa2" width="300" height="200" />
        </div>

        <div>
          <img className="blusa3" src="/assets/Imagens/Roupas/8.jpg" alt="blusa3" width="300" height="200" />
        </div>

        <div>
          <img className="blusa4" src="/assets/Imagens/Roupas/9.jpg" alt="blusa4" width="300" height="200" />
        </div>

        <div>
          <img className="blusa5" src="/assets/Imagens/Roupas/10.jpg" alt="blusa5" width="300" height="200" />
        </div>
      </div>

      <footer>
        <h1 className="contact">Contato</h1>
        <p className="WhatsApp">WhatsApp: (11) 98626-7098</p>
        <p className="Instagram">Instagram: @fahsion_atelier</p>
        <p className="Email">Email: fashion.atelier@gmail.com</p>
      </footer>
    </>
  );
}

export default App;
