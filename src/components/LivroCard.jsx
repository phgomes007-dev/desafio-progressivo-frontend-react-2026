import formatarPreco from "../utils/formatarPreco.js";

export default function LivroCard({ livro, onAdicionar }) {
  return (
    <article className="product-card">
      <div className="product-card__cover">
        <img src={livro.imagem} alt={livro.titulo} />
      </div>

      <div className="product-card__content">
        <h3 className="product-card__title">{livro.titulo}</h3>
        <p className="product-card__author">{livro.autor}</p>
        <p className="product-card__price">{formatarPreco(livro.preco)}</p>

        <button
          type="button"
          className="button button--small"
          onClick={() => onAdicionar && onAdicionar(livro)}
        >
          Adicionar ao carrinho
        </button>
      </div>
    </article>
  );
}