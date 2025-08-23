// -- Хуки
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// -- Стили
import './main.css'

// -- Reset css
import './reset.css'

// -- Компоненты
import '../src/assets/components/header/Header'
import Header from '../src/assets/components/header/Header'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
  </StrictMode>,
)
