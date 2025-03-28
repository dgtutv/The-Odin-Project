import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css"

createRoot(document.getElementById('root')).render(
  <StrictMode sx={{margin: "0", padding: "0", height: "100%"}}>
    <App sx={{height: "100%"}} />
  </StrictMode>,
)
