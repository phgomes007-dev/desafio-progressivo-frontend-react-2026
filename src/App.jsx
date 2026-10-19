import { useState } from "react";
import Cabecalho from "./components/Cabecalho.jsx";
import Catalogo from "./pages/Catalogo.jsx";
import Carrinho from "./components/Carrinho.jsx";
import livrosIniciais from "./data/livros.js";

export default function App() {
  const [livros] = useState(livrosIniciais);
  const [carrinho, setCarrinho] = useState([]);
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);

  function adicionarAoCarrinho(livro) {
    setCarrinho((prev) => [...prev, livro]);
  }

  function removerDoCarrinho(indiceParaRemover) {
    setCarrinho((prev) => prev.filter((_, index) => index !== indiceParaRemover));
  }

  return (
    <div className="app">
      <Cabecalho 
        quantidadeItens={carrinho.length} 
        aoClicarNoCarrinho={() => setCarrinhoAberto(true)} 
      />

      <Catalogo 
        livros={livros} 
        onAdicionar={adicionarAoCarrinho} 
      />

      {carrinhoAberto && (
        <Carrinho
          itens={carrinho}
          aoFechar={() => setCarrinhoAberto(false)}
          onRemover={removerDoCarrinho}
        />
      )}
    </div>
  );
}