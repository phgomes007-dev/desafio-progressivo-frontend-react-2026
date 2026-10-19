import formatarPreco from "../utils/formatarPreco.js";

export default function Carrinho({ itens = [], aoFechar, onRemover }) {
  // Calcula o valor total somando os preços dos livros no carrinho com reduce
  const total = itens.reduce((acumulador, item) => acumulador + item.preco, 0);

  return (
    <aside className="cart-modal">
      <div className="cart-modal__content">
        <div className="cart-modal__header">
          <h2>Seu Carrinho</h2>
          <button 
            type="button" 
            className="close-button" 
            onClick={aoFechar}
            aria-label="Fechar carrinho"
          >
            ✕
          </button>
        </div>

        {itens.length === 0 ? (
          <p className="cart-empty">O carrinho está vazio.</p>
        ) : (
          <ul className="cart-items">
            {itens.map((item, index) => (
              <li key={`${item.id}-${index}`} className="cart-item">
                <img src={item.imagem} alt={item.titulo} />
                <div className="cart-item__info">
                  <h4>{item.titulo}</h4>
                  <p>{formatarPreco(item.preco)}</p>
                </div>
                <button
                  type="button"
                  className="remove-button"
                  onClick={() => onRemover && onRemover(index)}
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className="cart-modal__footer">
          <div className="cart-total">
            <span>Total:</span>
            <strong>{formatarPreco(total)}</strong>
          </div>
        </div>
      </div>
    </aside>
  );
}