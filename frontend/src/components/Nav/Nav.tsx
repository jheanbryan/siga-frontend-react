import './Nav.css';
import perfilImage from '../../assets/profile-image.webp';

function Nav() {

  return(
    <nav>
      <div className="perfil">
          <img src={perfilImage} alt="foto Perfil" className='perfil-img'/><br/>
          <a href="conta.php">conta</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="deslogar.php">sair</a>
      </div>
      
      <ul>
        <li><a href="home.php">Home</a></li>
        <li><a href="biblioteca.php">Biblioteca</a></li>
        <li><a href="disciplinas.php">Disciplinas</a></li>          
        <li><a href="boletim.php">Boletim</a></li>
        <li><a href="jogovelha.php">Jogar</a></li>
        </ul>
    </nav>
  );
};

export default Nav;