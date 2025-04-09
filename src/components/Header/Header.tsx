import './Header.css';



function Header(props: any) {
  
  return(
    <div className='container-header'>
      <header>
        <h1>Sistema Acadêmico {props.subtitle}</h1>
      </header>
    </div>
  )
};

export default Header;