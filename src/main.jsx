import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './main.css'
import { Cuisine, Home, Recipe, Result } from './pages'
import { Nav, Search, Category } from './components'

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
      <Nav />
      <Search />
      <Category />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cuisine/:type' element={<Cuisine />} />
        <Route path='/search' element={<Result />} />
        <Route path='/recipe/:id' element={<Recipe />} />
      </Routes>
    </BrowserRouter>
  )
}
