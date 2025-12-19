import { produtosMock } from "../../data/leiloesMock";
import type { Produto } from "../../types/Produto";
import { CardProduto } from "../CardProduto/CardProduto";
import "./styles.css";

interface ListaDeProdutosProps {
  filtro?: string;
}

export function ListaDeProdutos({ filtro = "" }: ListaDeProdutosProps) {
  const listaFiltrada = produtosMock.filter((p: Produto) =>
    p.titulo.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="ListaDeProdutos">
      <h2>Leilões Ativos</h2>

      <div className="Cards" >
        {listaFiltrada.map((produto) => (
          <CardProduto key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  );
}
