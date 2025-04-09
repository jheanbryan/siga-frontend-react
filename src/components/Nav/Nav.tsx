import './Nav.css';
import perfilImage from '../../assets/profile-image.webp';
import { Link } from 'react-router-dom';

function Nav() {

  return(
    <nav>
      <div className="perfil">
          <img src={perfilImage} alt="foto Perfil" className='perfil-img'/><br/>
          <a href="conta.php">conta</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="deslogar.php">sair</a>
      </div>
      
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/biblioteca">Biblioteca</Link></li>
        <li><Link to="/disciplinas">Disciplinas</Link></li>          
        <li><Link to="/boletim">Boletim</Link></li>
        <li><Link to="/jogar">Jogar</Link></li>
        </ul>
    </nav>
  );
};

export default Nav;