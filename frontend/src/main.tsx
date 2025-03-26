import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Tabuleiro from './components/Tabuleiro/Tabuleiro.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Tabuleiro />
  </StrictMode>,
)
