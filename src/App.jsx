import { useEffect, useState } from "react";
import Cabecalho from "./components/Cabecalho.jsx";
import Rodape from "./components/Rodape.jsx";
import Catalogo from "./pages/Catalogo.jsx";
import { API_KEY, API_URL } from "./dados/api.js";

export default function App() {
  const [livros, setLivros] = useState([]);
  const [itensCarrinho, setItensCarrinho] = useState([]);
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);

  useEffect(() => {
    async function carregarLivros() {
      const resposta = await fetch(API_URL, {
        headers: { "x-api-key": API_KEY },
      });
      const dados = await resposta.json();
      setLivros(dados);
    }

    carregarLivros();
  }, []);

  function adicionarAoCarrinho(livro) {
    setItensCarrinho((itensAtuais) => {
      const itemExistente = itensAtuais.find((item) => item.id === livro.id);

      if (itemExistente) {
        return itensAtuais.map((item) =>
          item.id === livro.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }

      return [...itensAtuais, { ...livro, quantidade: 1 }];
    });
  }

  return (
    <>
      <Cabecalho
        quantidadeItens={itensCarrinho.reduce((total, item) => total + item.quantidade, 0)}
        aoClicarNoCarrinho={() => setCarrinhoAberto(!carrinhoAberto)}
      />
      <Catalogo livros={livros} onAdicionar={adicionarAoCarrinho} />
      <Rodape />
    </>
  );
}