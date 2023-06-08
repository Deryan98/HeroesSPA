import ReactDOM from 'react-dom/client'
import React from 'react'
import {BrowserRouter, HashRouter} from 'react-router-dom'
import {HeroesApp} from './HeroesApp.jsx'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <HeroesApp />
    </HashRouter>
  </React.StrictMode>,
)
