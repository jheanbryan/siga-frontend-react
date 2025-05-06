import './Nav.css';
import perfilImage from '../../assets/profile-image.webp';
import { Link } from 'react-router-dom';

function Nav() {

  return(
    <nav>
      <div className="perfil">
          <img src={perfilImage} alt="foto Perfil" className='perfil-img'/><br/>
          <Link to="/conta">Conta</Link>&nbsp;&nbsp;|&nbsp;&nbsp;<Link to="/cadastro">Sair</Link>
      </div>
      
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/biblioteca">Biblioteca</Link></li>
        <li><Link to="/disciplinas">Disciplinas</Link></li>          
        <li><Link to="/boletim">Boletim</Link></li>
        <li><Link to="/jogo-da-velha">Jogar</Link></li>
        </ul>
    </nav>
  );
};

export default Nav;