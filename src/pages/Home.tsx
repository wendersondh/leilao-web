import { useState } from "react";
import { BarraDeBusca } from "../components/BarraDeBusca/BarraDeBusca";
import { ListaDeProdutos } from "../components/ListaDeProdutos";

export function Home() {
  const [filtro, setFiltro] = useState("");

  function handleBuscar(texto: string) {
    setFiltro(texto);
  }

  return (
    <div>
      <BarraDeBusca aoBuscar={handleBuscar} />
      <ListaDeProdutos filtro={filtro} />
    </div>
  );
}
