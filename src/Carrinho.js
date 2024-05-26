import React from 'react';

function Carrinho({ carrinho, removerDoCarrinho, atualizarQuantidade }) {
  const calcularTotal = () => {
    let total = 0;
    carrinho.forEach((item) => {
      const preco = parseFloat(item.preco.replace("R$", "").replace(",", "."));
      total += preco * item.quantidade;
    });
    return total.toFixed(2);
  };

  return (
    <div className="cart">
      <div className="cart-header">Carrinho de Compras</div>
      {carrinho.length > 0 ? (
        carrinho.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.imagem} alt={item.nome} className="product-image" />
            <div className="product-info">
              <div className="product-name">{item.nome}</div>
              <div className="product-price">{item.preco}</div>
            </div>
            <div className="cart-buttons">
              <button className="btn-remove" onClick={() => removerDoCarrinho(item.nome)}>
                Remover
              </button>
              <input
                type="number"
                className="input-quantity"
                min="1"
                value={item.quantidade}
                onChange={(e) => atualizarQuantidade(item.nome, parseInt(e.target.value))}
              />
            </div>
          </div>
        ))
      ) : (
        <div className="empty-cart">Seu carrinho está vazio</div>
      )}
      <div className="cart-total">
        <strong>Total:</strong> <span>R$ {calcularTotal()}</span>
      </div>
      {carrinho.length > 0 && <div className="btn-checkout">Finalizar Compra</div>}
    </div>
  );
}

export default Carrinho;
