import Nav from '../../components/Nav/Nav';
import './Disciplinas.css';
import iconTrash from '../../assets/trash-icon.png';
import Header from '../../components/Header/Header';

function Discipline() {
  return (
    <>
    <Header />
    
    <div className='dicipline-page-body'>
      <Nav />

      <main className='main-container dicipline-container'>
        <h2>Disciplinas</h2>

        <h3>1° Período</h3>

        <table className='table-dicipline'>
          <tr>
            <th>Disciplina</th>
            <th>Turno</th>
            <th>Total Aulas</th>
            <th>Carga horária</th>
            <th>Curso</th>
            <th>Professor</th>
            <th>Opções</th>
          </tr>

          <tr>
            <td>Algoritmos 1</td>
            <td>Noturno</td>
            <td>80</td>
            <td>60</td>
            <td>PROEJA-Informática para Internet</td>
            <td>Aurelio Junior</td>
            <td className='center'>
              <button>Matricular-se</button>
              <a href="excluirDisciplina.php?id_disciplina=11">
                <img src={iconTrash} alt="" />
              </a>
            </td>
          </tr>

        </table>
      </main>

    </div>
    </>
  );
};

export default Discipline;