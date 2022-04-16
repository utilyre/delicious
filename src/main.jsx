import React from 'react'
import ReactDOM from 'react-dom/client'

import './main.css'
import { Home } from './pages'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

function App() {
  return (
    <div>
      <Home />
    </div>
  )
}
