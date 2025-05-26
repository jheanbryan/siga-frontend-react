import "./Boletim.scss";

import Nav from "../../components/Nav/Nav";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import iconTrash from "../../assets/trash-icon.png";

function Boletim() {
  return (
    <>
      <Header />

      <div className="boletim-page-body">
        <Nav />

        <main className="table-boletim">
          <table>
            <tbody>
              <tr>
                <th>Estudante:</th>
                <td>Camila</td>
                <th>RA:</th>
                <td>5555</td>
              </tr>
            </tbody>
          </table>
          <table>
            <tbody>
              <tr>
                <th>Unidade Curricular</th>
                <th>CH</th>
                <th>Aulas</th>
                <th>Total Faltas</th>
                <th>% Faltas</th>
                <th>N1</th>
                <th>N2</th>
                <th>Média</th>
                <th>Situação</th>
                <th>Opções</th>
              </tr>
              <tr>
                <td>
                  EXEMPLO Dispositivos Móveis
                  <br />
                  <small>Túlio</small>
                </td>
                <td>80</td>
                <td>100</td>
                <td>25</td>
                <td>25%</td>
                <td>5</td>
                <td>5</td>
                <td>5</td>
                <td>REPROVADO</td>
                <td>
                  <img src={iconTrash} alt="" />
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={10}>
                  <small>
                    <strong>Legenda:</strong>
                    <br />
                    <small>
                      <strong>CH/Aulas: </strong>Carga horária da Unidade
                      Curricular em horas / Quantidade de aulas ou encontros
                      presenciais previstos.
                    </small>
                  </small>
                  <p>
                    *Esses registros podem sofrer alterações até o final do
                    periodo letivo.
                  </p>
                </td>
              </tr>
            </tfoot>
          </table>
        </main>
      </div>

      <Footer />
    </>
  );
}

export default Boletim;
