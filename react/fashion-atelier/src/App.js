import React, { useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './styles.css';

import Produto from './produto';
import Shorts from './shorts';
import Navbar from './Navbar';
import Sapato from './sapato';
import Vestido from './vestido';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const contatoRef = useRef(null);
  const sobreRef = useRef(null);

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const handleScrollTo = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    });
  };

  const products = [
    { className: 'shorts1', src: '/assets/Imagens/Roupas/1.jpg', alt: 'shorts1' },
    { className: 'shorts3', src: '/assets/Imagens/Roupas/3.jpg', alt: 'shorts3' },
    { className: 'shorts4', src: '/assets/Imagens/Roupas/4.jpg', alt: 'shorts4' },
    { className: 'shorts5', src: '/assets/Imagens/Roupas/5.jpg', alt: 'shorts5' },
    { className: 'blusa1', src: '/assets/Imagens/Roupas/6.jpg', alt: 'blusa1' },
    { className: 'blusa2', src: '/assets/Imagens/Roupas/7.jpg', alt: 'blusa2' },
    { className: 'blusa3', src: '/assets/Imagens/Roupas/8.jpg', alt: 'blusa3' },
    { className: 'shorts2', src: '/assets/Imagens/Roupas/2.jpg', alt: 'shorts2' },
    { className: 'blusa4', src: '/assets/Imagens/Roupas/9.jpg', alt: 'blusa4' },
    { className: 'blusa5', src: '/assets/Imagens/Roupas/10.jpg', alt: 'blusa5' },
    { className: 'sapato1', src: '/assets/Imagens/Roupas/11.jpg', alt: 'sapato1' },
    { className: 'sapato2', src: '/assets/Imagens/Roupas/12.jpg', alt: 'sapato2' },
    { className: 'sapato3', src: '/assets/Imagens/Roupas/13.jpg', alt: 'sapato3' },
    { className: 'vestido1', src: '/assets/Imagens/Roupas/14.jpg', alt: 'vestido1' },
    { className: 'vestido2', src: '/assets/Imagens/Roupas/15.jpg', alt: 'vestido2' },
    { className: 'vestido3', src: '/assets/Imagens/Roupas/16.jpg', alt: 'vestido3' },
    { className: 'vestido4', src: '/assets/Imagens/Roupas/17.jpg', alt: 'vestido4' },
    { className: 'vestido5', src: '/assets/Imagens/Roupas/18.jpg', alt: 'vestido5' }
  ];

  const filteredProducts = products.filter(product =>
    product.alt.toLowerCase().includes(searchTerm)
  );

  return (
    <Router>
      <Navbar onSearch={handleSearch} onScrollTo={handleScrollTo} contatoRef={contatoRef} sobreRef={sobreRef} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div>
                <h1 className="promocao">
                  PROMOÇÃO IMPERDÍVEL - ATÉ 50% DE DESCONTO - PROMOÇÃO IMPERDÍVEL - ATÉ
                  50% DE DESCONTO - PROMOÇÃO IMPERDÍVEL - ATÉ 50% DE DESCONTO- PROMOÇÃO
                  IM
                </h1>
              </div>

              <div className="selector-roupas">
                <h1 className="selector-text">O que você procura?</h1>

                <Link to="/produto">
                  <img
                    className="selector-blusas"
                    src="/assets/Imagens/Roupas/blusas.jpg"
                    alt="blusas"
                    width="300"
                    height="200"
                  />
                </Link>

                <Link to="/shorts">
                <img
                  className="selector-shorts"
                  src="/assets/Imagens/Roupas/shorts.jpg"
                  alt="shorts"
                  width="300"
                  height="200"
                />
                </Link>
                
                <Link to="/sapato">
                <img
                  className="selector-calcados"
                  src="/assets/Imagens/Roupas/calcados.jpg"
                  alt="calcados"
                  width="300"
                  height="200"
                />
                </Link>

                <Link to="/vestido">
                <img
                  className="selector-vestidos"
                  src="/assets/Imagens/Roupas/vestidos.jpg"
                  alt="vestidos"
                  width="300"
                  height="200"
                />
                </Link>

              </div>

              <div className="all-products">
                <h1 className="text-all-products">Conheça nossos produtos!</h1>
                {filteredProducts.map((product, index) => (
                  <img
                    key={index}
                    className={product.className}
                    src={product.src}
                    alt={product.alt}
                    width="300"
                    height="200"
                  />
                ))}
              </div>

              <div>
                <h1 ref={sobreRef} className="sobre-nos">Sobre nós:</h1>
                <p className="text-sobre">
                  Bem-vindo à nossa loja de moda plus size feminina, Fashion Atelier! <br /> <br />
                  Nossa jornada começou com um simples desejo: oferecer uma experiência de moda inclusiva para mulheres de todas as formas e tamanhos. Cansadas de procurar por roupas que não só se encaixassem, mas que também celebrassem suas curvas e estilo pessoal, decidimos criar este espaço. <br />
                  Entendemos a frustração de muitas mulheres diante da escassez de opções elegantes e modernas no mercado plus size. Por isso, nos propusemos a preencher essa lacuna, trazendo uma variedade de peças cuidadosamente selecionadas que abraçam a diversidade de corpos e gostos. <br />
                  Aqui, você encontrará desde básicos versáteis até tendências da moda, tudo projetado com o conforto e a confiança em mente. Mais do que uma loja, queremos ser uma fonte de empoderamento, ajudando você a expressar sua personalidade através da moda, sem limitações de tamanho. <br />
                  Junte-se a nós nesta jornada de autoaceitação e estilo, porque a beleza vem em todas as formas e tamanhos.
                </p>
              </div>

              <footer>
                <h1 ref={contatoRef} className="contact">Contato</h1>
                <p className="WhatsApp">WhatsApp: (11) 98626-7098</p>
                <p className="Instagram">Instagram: @fashion_atelier</p>
                <p className="Email">Email: fashion.atelier@gmail.com</p>
              </footer>
            </>
          }
        />
        <Route path="/produto" element={<Produto />} />
        <Route path="/shorts" element={<Shorts />} />
        <Route path="/sapato" element={<Sapato />} />
        <Route path="/vestido" element={<Vestido />} />
      </Routes>
    </Router>
  );
}

export default App;
