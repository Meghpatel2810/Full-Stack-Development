import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Prac3 from './Prac3.jsx'
import Prac4 from './Prac4.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Prac4/>
    {/*  <Prac3/> */}
  </StrictMode>,
)
