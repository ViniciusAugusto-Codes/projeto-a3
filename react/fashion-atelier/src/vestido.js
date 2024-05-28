import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './produto.css';

function Vestido() {
  return (
    <>
    
      <div>
        <h1 className="promocao">PROMOÇÃO IMPERDÍVEL - ATÉ 50% DE DESCONTO - PROMOÇÃO IMPERDÍVEL - ATÉ 50% DE DESCONTO - PROMOÇÃO IMPERDÍVEL - ATÉ 50% DE DESCONTO- PROMOÇÃO IM</h1>
      </div>

      <div>
        <h1 className="blusas">Vestidos:</h1>
        <div>
          <img className="blusa1" src="/assets/Imagens/Roupas/14.jpg" alt="blusa1" width="300" height="200" />
        </div>

        <div>
          <img className="blusa2" src="/assets/Imagens/Roupas/15.jpg" alt="blusa2" width="300" height="200" />
        </div>

        <div>
          <img className="blusa3" src="/assets/Imagens/Roupas/16.jpg" alt="blusa3" width="300" height="200" />
        </div>

        <div>
          <img className="blusa4" src="/assets/Imagens/Roupas/17.jpg" alt="blusa4" width="300" height="200" />
        </div>

        <div>
          <img className="blusa5" src="/assets/Imagens/Roupas/18.jpg" alt="blusa5" width="300" height="200" />
        </div>
      </div>

      <footer>
        <h1 className="contact">Contato</h1>
        <p className="WhatsApp">WhatsApp: (11) 98626-7098</p>
        <p className="Instagram">Instagram: @fashion_atelier</p>
        <p className="Email">Email: fashion.atelier@gmail.com</p>
      </footer>
    </>
  );
}

export default Vestido;
