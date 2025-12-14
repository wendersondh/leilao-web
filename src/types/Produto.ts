export interface Produto {
  id: number;
  titulo: string;
  descricao: string;
  imagem: string;
  precoMinimo: number;
  lanceAtual: number;
  aumentoMinimo: number;
  tempoRestante: number;
  categoria: string;
}
