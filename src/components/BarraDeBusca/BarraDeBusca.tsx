import { useState } from "react";
import "./styles.css";

interface Props {
  aoBuscar: (texto: string) => void;
}

export function BarraDeBusca({ aoBuscar }: Props) {
  const [texto, setTexto] = useState("");

  function handleBuscar() {
    aoBuscar(texto);
  }

  return (
    <div className="busca-container">
      <input
        className="busca-input"
        type="text"
        placeholder="Buscar produtos..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />

      <button className="busca-botao" onClick={handleBuscar}>
        Buscar
      </button>
    </div>
  );
}
