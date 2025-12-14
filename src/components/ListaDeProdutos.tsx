import { produtosMock } from "../data/leiloesMock";
import type { Produto } from "../types/Produto";
import { CardProduto } from "./CardProduto";

interface ListaDeProdutosProps {
  filtro?: string;
}

export function ListaDeProdutos({ filtro = "" }: ListaDeProdutosProps) {
  const listaFiltrada = produtosMock.filter((p: Produto) =>
    p.titulo.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div style={{ maxWidth: 1100, margin: "20px auto" }}>
      <h2>Leilões Ativos</h2>

      <div
        style={{
          display: "flex",
          gap: 20,
          flexWrap: "wrap",
        }}
      >
        {listaFiltrada.map((produto) => (
          <CardProduto key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  );
}
