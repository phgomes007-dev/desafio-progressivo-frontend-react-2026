export default function Cabecalho({ quantidadeItens = 0, aoClicarNoCarrinho }) {
  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#inicio" className="logo">
          página <span>42</span>
        </a>

        <nav className="nav">
          <a href="#catalogo">Catálogo</a>
          <a href="#sobre">Sobre</a>
          <button 
            type="button" 
            className="cart-button" 
            onClick={aoClicarNoCarrinho}
          >
            Carrinho ({quantidadeItens})
          </button>
        </nav>
      </div>
    </header>
  );
}