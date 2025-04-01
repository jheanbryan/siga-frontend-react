import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Tabuleiro from './components/Tabuleiro/Tabuleiro.tsx'
import Home from './pages/Home/Home.tsx'
import './globals.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
