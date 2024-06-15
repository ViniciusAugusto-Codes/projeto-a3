import React, { useEffect } from 'react';
import './descricao.css';
import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css';

function App() {
  useEffect(() => {
    document.getElementById('addToCartBtn').addEventListener('click', function() {
      alert('O produto foi adicionado ao carrinho');
    });

    document.getElementById('buyNowBtn').addEventListener('click', function() {
      alert('O produto foi selecionado para a compra');
    });

    document.querySelector('.chat-icon').addEventListener('click', function() {
      document.querySelector('.chat-box').style.transform = 'translateY(0)';
    });

    document.querySelector('.close-chat-btn').addEventListener('click', function() {
      document.querySelector('.chat-box').style.transform = 'translateY(100%)';
    });
  }, []);

  return (
    <div>
      <div className="navbar">
        <div className="header-inner-content">
          <img className="logo" src="/assets/Icones/logo.png" alt="Logo" />
          <nav>
            <div className="search-box">
              <input type="text" className="search-text" placeholder="Busque seu estilo..." />
              <a href="#" className="search-button">
                <img src="/assets/Icones/lupa.svg" alt="lupa" height="20" width="20" />
              </a>
            </div>
          </nav>
          <div className="nav-icons">
            <img src="./assets/Icones/sacola.png" alt="sacola" />
            <img src="/assets/Icones/carrinho.png" alt="perfil" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="image">
          <img src="/assets/Icones/plus1.jpg" id="plus1" alt="Product" />
        </div>
        <div className="product-info">
          <h1>Regata wow :0</h1>
          <p>
            Cat ipsum dolor sit amet, funny little cat chirrup noise shaking upright tail when standing
            next to you for iâ€™m so hungry iâ€™m so hungry but ew not for that i is not fat, i is fluffy,
            or cough hairball, eat toilet paper. Decide to want nothing to do with my owner today annoy the
            old grumpy cat, start a fight and then retreat to wash when i lose.
          </p>
          <div className="price">
            <p>Preço: R$100</p>
            <p>Parcelas: até 4x R$25</p>
          </div>
          <div className="buttons">
            <button id="addToCartBtn">Add to Cart</button>
            <button id="buyNowBtn">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="chat"></div>
      <div className="chat-icon">
        <i className="fas fa-comment-alt"></i>
      </div>
      <div className="chat-box">
        <div className="chat-header">
          <span>Chat :3</span>
          <button className="close-chat-btn">&times;</button>
        </div>
        <div className="chat-body">
          <p>Olá! Como podemos ajudar?</p>
        </div>
      </div>
    </div>
  );
}

export default App;
