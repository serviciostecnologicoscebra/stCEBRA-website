import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import { Toaster } from 'react-hot-toast'
import './styles/main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster />
    <App />
  </React.StrictMode>,
)