import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from './App'
import { Toaster } from 'react-hot-toast'
import './styles/main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <HelmetProvider>
    <Toaster />
    <App />
    </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>,
)