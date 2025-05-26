import "./Tabuleiro.scss";
import Celula from "../Celula/Celula";
import { useState } from "react";

export default function Tabuleiro() {
  const [celulas, setCelulas] = useState<(string | null)[]>([
    null, null, null,
    null, null, null,
    null, null, null
  ]);
  const [vezX, setVezX] = useState(true);
  const [vitoria, setVitoria] = useState(false);
  const [contador, setContador] = useState(0);

  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  const [jogoIniciado, setJogoIniciado] = useState(false);

  function joga(i: number) {
    if (!jogoIniciado || celulas[i] != null || vitoria) {
      return;
    }
    console.log(`jogou`);

    let novoTabuleiro = [...celulas];

    if (vezX) {
      novoTabuleiro[i] = "xis";
      setVezX(false);
    } else {
      novoTabuleiro[i] = "circulo";
      setVezX(true);
    }
    setCelulas(novoTabuleiro);
    verificaVitoria(novoTabuleiro);
  }

  function verificaVitoria(estadoTabuleiro: (string | null)[]) {
    setContador(prev => prev + 1);
    console.log(contador);

    if (
      estadoTabuleiro[0] !== null &&
      estadoTabuleiro[0] === estadoTabuleiro[1] &&
      estadoTabuleiro[1] === estadoTabuleiro[2]
    ) {
      setVitoria(true);
      const vencedor = vezX ? player2 : player1;
      alert(`${vencedor} ganhou!`);
      return;
    }
    if (
      estadoTabuleiro[3] !== null &&
      estadoTabuleiro[3] === estadoTabuleiro[4] &&
      estadoTabuleiro[4] === estadoTabuleiro[5]
    ) {
      setVitoria(true);
      const vencedor = vezX ? player2 : player1;
      alert(`${vencedor} ganhou!`);
      return;
    }
    if (
      estadoTabuleiro[6] !== null &&
      estadoTabuleiro[6] === estadoTabuleiro[7] &&
      estadoTabuleiro[7] === estadoTabuleiro[8]
    ) {
      setVitoria(true);
      const vencedor = vezX ? player2 : player1;
      alert(`${vencedor} ganhou!`);
      return;
    }
    if (
      estadoTabuleiro[0] !== null &&
      estadoTabuleiro[0] === estadoTabuleiro[3] &&
      estadoTabuleiro[3] === estadoTabuleiro[6]
    ) {
      setVitoria(true);
      const vencedor = vezX ? player2 : player1;
      alert(`${vencedor} ganhou!`);
      return;
    }
    if (
      estadoTabuleiro[1] !== null &&
      estadoTabuleiro[1] === estadoTabuleiro[4] &&
      estadoTabuleiro[4] === estadoTabuleiro[7]
    ) {
      setVitoria(true);
      const vencedor = vezX ? player2 : player1;
      alert(`${vencedor} ganhou!`);
      return;
    }
    if (
      estadoTabuleiro[2] !== null &&
      estadoTabuleiro[2] === estadoTabuleiro[5] &&
      estadoTabuleiro[5] === estadoTabuleiro[8]
    ) {
      setVitoria(true);
      const vencedor = vezX ? player2 : player1;
      alert(`${vencedor} ganhou!`);
      return;
    }
    if (
      estadoTabuleiro[0] !== null &&
      estadoTabuleiro[0] === estadoTabuleiro[4] &&
      estadoTabuleiro[4] === estadoTabuleiro[8]
    ) {
      setVitoria(true);
      const vencedor = vezX ? player2 : player1;
      alert(`${vencedor} ganhou!`);
      return;
    }
    if (
      estadoTabuleiro[2] !== null &&
      estadoTabuleiro[2] === estadoTabuleiro[4] &&
      estadoTabuleiro[4] === estadoTabuleiro[6]
    ) {
      setVitoria(true);
      const vencedor = vezX ? player2 : player1;
      alert(`${vencedor} ganhou!`);
      return;
    }

    if (contador === 8 && !vitoria) {
      alert("Empate!");
    }
  }

  function iniciarJogo() {
    if (player1.trim() === "" || player2.trim() === "") {
      alert("Preencha o nome dos dois jogadores para começar!");
      return;
    }
    setCelulas(Array(9).fill(null));
    setVitoria(false);
    setVezX(true);
    setContador(0);
    setJogoIniciado(true);
  }

  function resetarJogo() {
    setCelulas(Array(9).fill(null));
    setVitoria(false);
    setVezX(true);
    setContador(0);
    setPlayer1("");
    setPlayer2("");
    setJogoIniciado(false);
  }

  return (
    <>
      <h1>Vamos jogar uma partida?</h1>

      <div className="div-players">
        <label>Player1:</label>
        <input 
          type="text" 
          value={player1}
          onChange={(e) => setPlayer1(e.target.value)}
          disabled={jogoIniciado}
        />

        <label> Player2:</label>
        <input 
          type="text" 
          value={player2}
          onChange={(e) => setPlayer2(e.target.value)}
          disabled={jogoIniciado}
        />
      </div>

      {!jogoIniciado ? (
        <button onClick={iniciarJogo}>Jogar</button>
      ) : (
        <button onClick={resetarJogo}>Resetar</button>
      )}

      {jogoIniciado && (
        <div className="tabuleiro">
          {celulas.map((nomeClasse, index) => (
            <Celula
              key={index}
              nomeClasse={nomeClasse}
              vezDoXis={vezX}
              onClick={() => joga(index)}
            />
          ))}
        </div>
      )}
    </>
  );
}
