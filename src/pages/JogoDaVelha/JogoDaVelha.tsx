import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import Tabuleiro from '../../components/Tabuleiro/Tabuleiro';
import './JogoDaVelha.scss';

function JogoDaVelha() {
  return(
    <>
      <Header />

      <div className='container'>
          <Nav />

          <main>

            <Tabuleiro />
            
          </main>
      </div>

      <Footer />
    </>
  );
};

export default JogoDaVelha;
