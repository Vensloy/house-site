// -- Хуки
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// -- Стили
import './main.css'

// -- Reset css
import './reset.css'

// -- Компоненты
import Main from '../src/assets/components/Main'
import Header from '../src/assets/components/Header'
import Catalog from '../src/assets/components/Catalog'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Main />
    <Catalog />
  </StrictMode>,
)
