import './Tabuleiro.css';
import '../Celula/Celula';
import Celula from '../Celula/Celula';

function Tabuleiro() {

  return (
    <>
      <main>
          <h1>Vamos jogar uma partida?</h1>

          <div className='div-players'>
            <label htmlFor="">Player1:</label>
            <input type="text" />

            <label htmlFor="">Player2:</label>
            <input type="text" />
          </div>

          <button>Jogar</button>

          <div className='tic-tac-toe tabuleiro'>
            <Celula name="xis" />
            <Celula name="" />
            <Celula name="" />

            <Celula  name="" />
            <Celula  name="" />
            <Celula  name="" />            
            
            <Celula  name="" />
            <Celula  name="" />
            <Celula  name="" />
          </div>
      </main>
    </>
  )
};

export default Tabuleiro;
