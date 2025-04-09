import Nav from "../../components/Nav/Nav";
import iconTrash from "../../assets/trash-icon.png";
import Header from "../../components/Header/Header";
import imageProfile from "../../assets/profile-image.webp";
import Footer from "../../components/Footer/Footer";
import './Conta.css';

function Conta() {
  return (
    <>
      <Header />

      <div className="main-container">
        <Nav />

        <form method="post" action="salvar.php" encType="multipart/form-data" className="form">
          <div className="perfil">
            <h2>Editar Conta</h2>
            <img
              src={imageProfile}
              id="imgFoto"
              alt="foto Perfil"
              className="perfil-img"
            />
            <br />

            <p>
              Foto:
              <input type="file" name="foto" /*onChange={}*/ id="fileFoto" />
            </p>
            <p>
              Nome:
              <input
                type="text"
                value="Leandro Steffen"
                name="nome"
                placeholder="nome"
                required
              />
            </p>
            <p>
              Email:
              <input
                type="email"
                value="leandro@gmail.com"
                name="email"
                placeholder="email"
                required
              />
            </p>
            <p id="paiSenha1">
              Senha:
              <input
                type="password"
                value="123"
                id="senha1"
                placeholder="senha"
                name="senha"
                required
              />
            </p>
            <p id="paiSenha2">
              Repita a senha:
              <input
                /*onChange={console.log(12)} */ value="123"
                type="password"
                id="senha2"
                required
                placeholder="repita a senha"
                maxLength={11}
              />
            </p>

            <p>
              CPF (somente números):
              <input
                type="tel"
                placeholder="CPF"
                value="123312312"
                name="cpf"
                required
              />
            </p>
            <p>
              Data de nascimento (dd/mm/aaaa)
              <input type="date" required name="dataNasc" value="2023-06-15" />
            </p>

            <button type="submit">Salvar</button>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Conta;
