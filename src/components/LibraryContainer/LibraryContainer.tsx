import Nav from '../Nav/Nav';
import './LibraryContainer.css';

function LibraryContainer() {
  return (
    <div className='main-container Libary-container'>
    <Nav />

    <main className='main-libary-container'>       
      <div className='div-flex-col'>
        <h2>Biblioteca</h2>

        <p>
          As Bibliotecas do IFMS são responsáveis por promover e disseminar o acesso à informação, apoiando as atividades de ensino, pesquisa, extensão e inovação no IFMS.
        </p>

        <p className='strong'>
          Acervo Buscar publicações (livros, revistas, artigos, etc.) no acervo físico
        </p>

        <a href="">Catálogo online (Sistema Pergamum)</a>
      </div>

      <div className='div-flex-col'>
        <p className='strong'>
          Bibliotecas Virtuais
        </p>

        <a href="">BV person</a>
      </div>

      
      <div className='div-flex-col'>
        <p className='strong'>
          Periódicos
        </p>

        <p>
          <a href="">
            Periódicos Capes:
          </a>
          publicações científicas nacionais e internacionais de todas as áreas do conhecimento.
        </p>
      </div>

      <div className='div-flex-col'>
        <p className='strong'>
          Regulamento
        </p>

        <a href="">
        Regulamento da biblioteca
        </a>

        <p>
          Caso ocorra alguma inconsistência favor procurar a Central de Relacionamento (CEREL) do seu campus.
        </p>
      </div>
    </main>
    </div>
  );
};

export default LibraryContainer;
