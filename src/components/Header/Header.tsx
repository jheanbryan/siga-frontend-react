import './Header.css';

function Header(props: any) {

  return (
    <div className='container-header'>
      <header  className='header'>
        <h1>Sistema Acadêmico {props.subtitle}</    h1>

        {props.mostrarFormulario && (
          <form id="login" action="/home" method="post">
            <input type="email" placeholder="e-mail" name="email" />
            <input type="password" placeholder="senha" id="senha3" name="senha" />
            <button type="submit">Logar</button>
          </form>
        )}

      </header>
    </div>
  );
}

export default Header;
