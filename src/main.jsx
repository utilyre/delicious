import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './main.css'
import { Cuisine, Home } from './pages'
import { Category } from './components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

function App() {
  return (
    <BrowserRouter>
      <Category />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cuisine/:type' element={<Cuisine />} />
      </Routes>
    </BrowserRouter>
  )
}
