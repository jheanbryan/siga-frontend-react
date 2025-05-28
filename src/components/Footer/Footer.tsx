import './Footer.scss';
import { useState, useEffect } from 'react';

function Footer() {
  const [tema, setTema] = useState('light');

  const alternarTema = () => {
    const novoTema = tema === 'light' ? 'dark' : 'light';
    setTema(novoTema);
  };

  useEffect(() => {
    document.body.classList.remove('tema-light', 'tema-dark');
    document.body.classList.add(`tema-${tema}`);
  }, [tema]);

  return (
    <footer>
      <p>©Todos os direitos reservados;</p>
      <button onClick={alternarTema}>Alterar Tema</button>
    </footer>
  );
}

export default Footer;
