import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './Features/Context.js'
import { ThemeProvider } from './Features/ThemeProvider.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
        <ThemeProvider>
        <AppProvider>
          <App />
        </AppProvider>
        </ThemeProvider>
        </BrowserRouter>
    
  </StrictMode>,
)
