import { useEffect, useState } from "react";
import "./styles.css";

interface TemporizadorLeilaoProps {
  segundos: number;
  aoEncerrar?: () => void;
}

export function TemporizadorLeilao({ segundos, aoEncerrar }: TemporizadorLeilaoProps) {
  const [tempo, setTempo] = useState(segundos);

  useEffect(() => {
    if (tempo <= 0) {
      aoEncerrar && aoEncerrar();
      return;
    }

    const intervalId = setInterval(() => {
      setTempo((t) => t - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [tempo, aoEncerrar]);

  return (
    <span className={`formato ${tempo > 0 ? "colorAtivo" : "colorEncerrado"}`} >
      {tempo > 0 ? formatarTempo(tempo) : "Encerrado"}
    </span>
  );
}


function formatarTempo(totalSegundos: number) {
    if (totalSegundos <= 0) return "00:00";

    const horas = Math.floor(totalSegundos / 3600);
    const minutos = Math.floor((totalSegundos % 3600) / 60);
    const segundos = totalSegundos % 60;

    const mm = String(minutos).padStart(2, "0");
    const ss = String(segundos).padStart(2, "0");

    if (horas > 0) {
      const hh = String(horas).padStart(2, "0");
      return `${hh}:${mm}:${ss}`;
    }

    return `${mm}:${ss}`;
  }
