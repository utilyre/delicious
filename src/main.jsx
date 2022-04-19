import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './main.css'
import { Cuisine, Home, Result } from './pages'
import { Search, Category } from './components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

/**
 * Root component of project
 *
 * @component
 */
function App() {
  return (
    <BrowserRouter>
      <Search />
      <Category />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cuisine/:type' element={<Cuisine />} />
        <Route path='/search' element={<Result />} />
      </Routes>
    </BrowserRouter>
  )
}
