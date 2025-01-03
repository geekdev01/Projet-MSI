import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import App from './App.jsx'
import Card from './components/Card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Card/>
    <App />
  </StrictMode>,  
)
