import type { Produto } from "../types/Produto";
import { TemporizadorLeilao } from "./TemporizadorLeilao";

interface CardProdutoProps {
  produto: Produto;
}

export function CardProduto({ produto }: CardProdutoProps) {
  return (
    <div
      style={{
        width: 260,
        border: "1px solid #ddd",
        padding: 15,
        borderRadius: 10,
        background: "#fff",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img
        src={produto.imagem}
        alt={produto.titulo}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
          borderRadius: "8px",
          marginBottom: 10,
        }}
      />

      <h3>{produto.titulo}</h3>

      <p style={{ fontSize: 14, color: "#555" }}>
        {produto.descricao}
      </p>

      <p>
        Lance atual: <strong>R$ {produto.lanceAtual}</strong>
      </p>

      <p>
        Tempo restante:{" "}
        <TemporizadorLeilao segundos={produto.tempoRestante} />
      </p>

      <button
        style={{
          marginTop: "auto",
          width: "100%",
          padding: 10,
          background: "#0066ff",
          color: "#fff",
          borderRadius: 6,
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Dar lance
      </button>
    </div>
  );
}
