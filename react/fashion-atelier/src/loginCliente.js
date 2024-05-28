import React, { useRef, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './loginCliente.css';


function App() {
  return (
            <>
    <div>
      <div className="barra-rosa">
        <img src="/assets/Icones/logo.jpg" alt="Imagem no meio da barra rosa" />
      </div>

      <div className="conteudo">
        <img src="/assets/Icones/fotoroupa.jpg" alt="Segunda imagem no lado esquerdo" />
        <div className="botoes">
          <label>Bem vindo Cliente!</label>
          <div className="inputs">
            <input type="text" placeholder="Digite seu nome" />
            <input type="password" placeholder="Digite sua senha" />
          </div>
          <div className="botoes-login">
            <button className="btn"><span>Entrar</span></button>
          </div>
        </div>
      </div>
    </div>
 </>
       
  );
}

export default App;
