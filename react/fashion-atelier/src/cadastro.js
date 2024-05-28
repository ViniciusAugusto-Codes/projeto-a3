import React, { useRef, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './cadastro.css';


function App() {
  return (
            <>
    <div className="container">
      <header>
        <img src="/assets/Icones/logo.jpg" alt="Logo" className="logo" />
      </header>
      <main>
        <p><strong>Área de Login</strong></p>
        <button className="btn"><span>Cliente</span></button>
        <button className="btn"><span>ADM</span></button>
      </main>
      <footer>
      </footer>
    </div>

 </>
       
  );
}

export default App;
