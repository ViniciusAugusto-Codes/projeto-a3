import React, { useState, useEffect } from 'react';
import Catalogo from './Catalogo';
import Carrinho from './Carrinho';
import './index';

function App() {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (produto) => {
    const produtoExistente = carrinho.find((item) => item.nome === produto.nome);
    if (produtoExistente) {
      setCarrinho(carrinho.map((item) =>
        item.nome === produto.nome ? { ...item, quantidade: item.quantidade + 1 } : item
      ));
    } else {
      setCarrinho([...carrinho, { ...produto, quantidade: 1 }]);
    }
  };

  const removerDoCarrinho = (nomeProduto) => {
    setCarrinho(carrinho.filter((item) => item.nome !== nomeProduto));
  };

  const atualizarQuantidade = (nomeProduto, novaQuantidade) => {
    setCarrinho(carrinho.map((item) =>
      item.nome === nomeProduto ? { ...item, quantidade: novaQuantidade } : item
    ));
  };

  return (
    <div>
      <Catalogo adicionarAoCarrinho={adicionarAoCarrinho} />
      <Carrinho
        carrinho={carrinho}
        removerDoCarrinho={removerDoCarrinho}
        atualizarQuantidade={atualizarQuantidade}
      />
    </div>
  );
}

export default App;
