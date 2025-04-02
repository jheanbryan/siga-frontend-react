import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import './globals.css';
import Home from './pages/Home/Home.tsx'
import NotFound from './pages/NotFound/NotFound.tsx';
import Library from './pages/Biblioteca/Biblioteca.tsx';
import Discipline from './pages/Disciplinas/Disciplinas.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/biblioteca" element={<Library />} />
      <Route path="/disciplinas" element={<Discipline />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
)
