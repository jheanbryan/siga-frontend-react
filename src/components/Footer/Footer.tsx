import './Footer.scss';
import { useState, useEffect } from 'react';

function Footer() {
  const [tema, setTema] = useState('light');

  useEffect(() => {
    document.body.classList.remove('tema-light', 'tema-dark', 'tema-impress');
    document.body.classList.add(`tema-${tema}`);
  }, [tema]);

  return (
    <footer>
      <p>©Todos os direitos reservados;</p>
      <button onClick={() => {setTema('light')}} className='btn-primario'>Claro</button>
      <button onClick={() => {setTema('dark')}} className='btn-primario'>Escuro</button>
      <button onClick={() => {setTema('impress')}} className='btn-primario'>Impress</button>
    </footer>
  );
}

export default Footer;
