import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import './globals.css';
import Home from './pages/Home/Home.tsx'
import NotFound from './pages/NotFound/NotFound.tsx';
import Library from './pages/Biblioteca/Biblioteca.tsx';
import Discipline from './pages/Disciplinas/Disciplinas.tsx';
import Boletim from './pages/Boletim/Boletim.tsx';
import Conta from './pages/Conta/Conta.tsx';
import JogoDaVelha from './pages/JogoDaVelha/JogoDaVelha.tsx';
import Cadastro from './pages/Cadastro/Cadastro.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename='/front-react/'>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/biblioteca" element={<Library />} />
      <Route path="/disciplinas" element={<Discipline />} />
      <Route path="/boletim" element={<Boletim />} />
      <Route path="/conta" element={<Conta />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/jogo-da-velha" element={<JogoDaVelha />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
)
