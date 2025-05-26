import './Header.scss';
import { Link } from 'react-router-dom';

function Header(props: any) {

  return (
    <div className='container-header'>
      <header  className='header'>
        <h1>Sistema Acadêmico {props.subtitle}</h1>

        {props.mostrarFormulario && (
          <form id="login" action="/home" method="post">
            <input type="email" placeholder="e-mail" name="email" />
            <input type="password" placeholder="senha" id="senha3" name="senha" />
            <Link to="/home"><button>Logar</button></Link>
          </form>
        )}

      </header>
    </div>
  );
}

export default Header;
