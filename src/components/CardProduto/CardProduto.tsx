import type { Produto } from "../../types/Produto";
import { TemporizadorLeilao } from "../TemporizadorLeilao/TemporizadorLeilao";
import "./styles.css";

interface CardProdutoProps {
  produto: Produto;
}

export function CardProduto({ produto }: CardProdutoProps) {
  return (
    <div className="CardProduto" >

      <img
        src={produto.imagem}
        alt={produto.titulo}
        className="imagemProduto"
      />

      <div className="descricao-container">
        <h3>{produto.titulo}</h3>

        <p className="descricao">
          {produto.descricao}
        </p>

        <p>
          Lance atual: <strong>R$ {produto.lanceAtual}</strong>
        </p>

        <p>
          Tempo restante:{" "}
          <TemporizadorLeilao segundos={produto.tempoRestante} />
        </p>
      </div>

      <button className="btn" >
        Dar lance
      </button>
    </div>
  );
}
