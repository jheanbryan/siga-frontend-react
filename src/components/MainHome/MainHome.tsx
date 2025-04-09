import Nav from '../Nav/Nav';
import './MainHome.css';

function MainHome() {

  return (
    <main className='main-container home-main-container'>
      <Nav />

      <div className='home-text'>
        <h2>
          Olá, Leandro Steffen
        </h2>

        <p>
          A partir de agora você passará a ter acesso aos seus dados no Sistema Acadêmico do IFMS.
        </p>

        <p>
          Essa é a segunda de várias etapas que virão. A primeira foi o acesso ao boletim, agora, nesta fase você poderá consultar em tempo real quais as unidades que está matriculado no semestre, ver horários de aula e permanência, bem como acessar notas e faltas, além do boletim.
        </p>

        <p>
          Se você está fazendo mais de um curso no IFMS poderá alternar entre suas diferentes matrículas no canto superior esquerdo da tela, abaixo do texto “Sistema Acadêmico”.
        </p>

        <p>
          No menu "Disciplinas" você verá a relação de todas as unidades que está matriculado no semestre atual. Clicando sobre o nome de cada uma, você verá os horários de permanência do(a) professor(a) e os horários e locais de aula.
        </p>

        <p>
          No menu "Notas" você conseguirá visualizar todas as notas já lançadas, tanto das unidades atuais quanto daquelas de semestres anteriores e a quantidade de faltas em cada uma delas
        </p>

        <p>
          No menu "Notas" você conseguirá visualizar todas as notas já lançadas, tanto das unidades atuais quanto daquelas de semestres anteriores e a quantidade de faltas em cada uma delas
        </p>

        <p>
          Em um futuro próximo, novas funcionalidades serão disponibilizadas na Área do Estudante, como solicitação de rematrícula, acesso ao plano de ensino do professor, à matriz curricular do curso, gerar atestado de matrícula, acesso ao histórico escolar, entre outras.
        </p>

        <p>
          Fique à vontade para dar sugestões para melhoria desse espaço.
        </p>

        <p>
          Aproveitem!
        </p>

        <p>
          Pró-Reitoria de Ensino e Reitoria
        </p>
      </div>

      <div className='home-news'>
        <h2>Ultimas notícias</h2>

        <p>Aberto processo seletivo</p>
      </div>
    </main>
  )
};

export default MainHome;
