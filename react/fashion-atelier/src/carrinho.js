import React, { useState } from 'react';
import './carrinho.css';
import logo from '/assets/Icones/logo.jpg';
import lupa from '/assets/Icones/lupa.svg';
import sacola from '/assets/Icones/sacola.png';
import carrinho from '/assets/Icones/carrinho.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';

const LoginPage = () => {
  const [isPaymentModalVisible, setPaymentModalVisible] = useState(false);
  const [isChatBoxVisible, setChatBoxVisible] = useState(false);
  const [products, setProducts] = useState([]);

  const cancelPurchase = () => {
    setProducts([]);
  };

  const showPaymentModal = () => {
    setPaymentModalVisible(true);
  };

  const closePaymentModal = () => {
    setPaymentModalVisible(false);
  };

  const toggleChatBox = () => {
    setChatBoxVisible(!isChatBoxVisible);
  };

  return (
    <div>
      <div className="navbar">
        <div className="header-inner-content">
          <img className="logo" src={logo} alt="Logo" />
          <nav>
            <div className="search-box">
              <input type="text" className="search-text" placeholder="Busque seu estilo..." />
              <a href="#" className="search-button">
                <img src={lupa} alt="lupa" height="20" width="20" />
              </a>
            </div>
          </nav>
          <div className="nav-icons">
            <img src={sacola} alt="sacola" />
            <img src={carrinho} alt="perfil" />
          </div>
        </div>
      </div>

      <h2>Produtos Comprados</h2>

      <table id="product-table">
        <thead>
          <tr>
            <th>Nome do Produto</th>
            <th>Quantidade</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={cancelPurchase}>Cancelar Compra</button>
      <button onClick={showPaymentModal}>Pagar</button>

      {isPaymentModalVisible && (
        <div className="payment-modal" id="payment-modal">
          <span className="close-btn" onClick={closePaymentModal}>&times;</span>
          <h3>Formas de Pagamento</h3>
          <p>
            <input type="radio" name="payment" value="pix" /> PIX<br />
            <input type="radio" name="payment" value="credit" /> Crédito<br />
            <input type="radio" name="payment" value="debit" /> Débito<br />
          </p>
        </div>
      )}

      <div className="chat">
        <div className="chat-icon" onClick={toggleChatBox}>
          <FontAwesomeIcon icon={faCommentAlt} />
        </div>
        <div className={`chat-box ${isChatBoxVisible ? 'visible' : ''}`}>
          <div className="chat-header">
            <span>Chat :3</span>
            <button className="close-chat-btn" onClick={toggleChatBox}>&times;</button>
          </div>
          <div className="chat-body">
            <p>Olá! Como podemos ajudar?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
