import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './styles.css';
import ReactDOM from 'react-dom';

function App() {
  return (
    <>
      <div className="navbar">
        <div className="header-inner-content">
          <img className="logo" src="/assets/Imagens/Icones/logo.jpg" alt="Logo" />
          <nav>
            <div className="search-box">
              <input
                type="text"
                className="search-text"
                placeholder="Busque seu estilo..."
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
            <p className="home">Home</p>
            <p className="contato">Contato</p>
            <p className="sobre">Sobre</p>
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

      <div>
        <h1 className="promocao">
          PROMOÇÃO IMPERDÍVEL - ATÉ 50% DE DESCONTO - PROMOÇÃO IMPERDÍVEL - ATÉ
          50% DE DESCONTO - PROMOÇÃO IMPERDÍVEL - ATÉ 50% DE DESCONTO- PROMOÇÃO
          IM
        </h1>
      </div>

      <div className="selector-roupas">
        <h1 className="selector-text">O que você procura?</h1>
        <img
          className="selector-blusas"
          src="/assets/Imagens/Roupas/blusas.jpg"
          alt="blusas"
          width="300"
          height="200"
        />
        <img
          className="selector-shorts"
          src="/assets/Imagens/Roupas/shorts.jpg"
          alt="shorts"
          width="300"
          height="200"
        />
        <img
          className="selector-calcados"
          src="/assets/Imagens/Roupas/calcados.jpg"
          alt="calcados"
          width="300"
          height="200"
        />
        <img
          className="selector-vestidos"
          src="/assets/Imagens/Roupas/vestidos.jpg"
          alt="vestidos"
          width="300"
          height="200"
        />
      </div>

      <div className="all-products">
        <h1 className="text-all-products">Conheça nossos produtos!</h1>
        <img
          className="shorts1"
          src="/assets/Imagens/Roupas/1.jpg"
          alt="shorts1"
          width="300"
          height="200"
        />
        <img
          className="shorts3"
          src="/assets/Imagens/Roupas/3.jpg"
          alt="shorts3"
          width="300"
          height="200"
        />
        <img
          className="shorts4"
          src="/assets/Imagens/Roupas/4.jpg"
          alt="shorts4"
          width="300"
          height="200"
        />
        <img
          className="shorts5"
          src="/assets/Imagens/Roupas/5.jpg"
          alt="shorts5"
          width="300"
          height="200"
        />
        <img
          className="blusa1"
          src="/assets/Imagens/Roupas/6.jpg"
          alt="blusa1"
          width="300"
          height="200"
        />
        <img
          className="blusa2"
          src="/assets/Imagens/Roupas/7.jpg"
          alt="blusa2"
          width="300"
          height="200"
        />
        <img
          className="blusa3"
          src="/assets/Imagens/Roupas/8.jpg"
          alt="blusa3"
          width="300"
          height="200"
        />
        <img
          className="shorts2"
          src="/assets/Imagens/Roupas/2.jpg"
          alt="shorts2"
          width="300"
          height="200"
        />
        <img
          className="blusa4"
          src="/assets/Imagens/Roupas/9.jpg"
          alt="blusa4"
          width="300"
          height="200"
        />
        <img
          className="blusa5"
          src="/assets/Imagens/Roupas/10.jpg"
          alt="blusa5"
          width="300"
          height="200"
        />
        <img
          className="sapato1"
          src="/assets/Imagens/Roupas/11.jpg"
          alt="sapato1"
          width="300"
          height="200"
        />
        <img
          className="sapato2"
          src="/assets/Imagens/Roupas/12.jpg"
          alt="sapato2"
          width="300"
          height="200"
        />
        <img
          className="sapato3"
          src="/assets/Imagens/Roupas/13.jpg"
          alt="sapato3"
          width="300"
          height="200"
        />
        <img
          className="vestido1"
          src="/assets/Imagens/Roupas/14.jpg"
          alt="vestido1"
          width="300"
          height="200"
        />
        <img
          className="vestido2"
          src="/assets/Imagens/Roupas/15.jpg"
          alt="vestido2"
          width="300"
          height="200"
        />
        <img
          className="vestido3"
          src="/assets/Imagens/Roupas/16.jpg"
          alt="vestido3"
          width="300"
          height="200"
        />
        <img
          className="vestido4"
          src="/assets/Imagens/Roupas/17.jpg"
          alt="vestido4"
          width="300"
          height="200"
        />
        <img
          className="vestido5"
          src="/assets/Imagens/Roupas/18.jpg"
          alt="vestido5"
          width="300"
          height="200"
        />
      </div>

      <div>
        <h1 className="sobre-nos">Sobre nós:</h1>
        <p className="text-sobre">
          Bem-vindo à nossa loja de moda plus size feminina, Fashion Atelier! <br /> <br />
          Nossa jornada começou com um simples desejo: oferecer uma experiência de moda inclusiva para mulheres de todas as formas e tamanhos. Cansadas de procurar por roupas que não só se encaixassem, mas que também celebrassem suas curvas e estilo pessoal, decidimos criar este espaço. <br />
          Entendemos a frustração de muitas mulheres diante da escassez de opções elegantes e modernas no mercado plus size. Por isso, nos propusemos a preencher essa lacuna, trazendo uma variedade de peças cuidadosamente selecionadas que abraçam a diversidade de corpos e gostos. <br />
          Aqui, você encontrará desde básicos versáteis até tendências da moda, tudo projetado com o conforto e a confiança em mente. Mais do que uma loja, queremos ser uma fonte de empoderamento, ajudando você a expressar sua personalidade através da moda, sem limitações de tamanho. <br />
          Junte-se a nós nesta jornada de autoaceitação e estilo, porque a beleza vem em todas as formas e tamanhos.
        </p>
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

export default App;
