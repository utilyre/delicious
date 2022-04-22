import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import './main.css'
import { Cuisine, Home, Recipe, Result } from './pages'
import { Nav, Search, Category } from './components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

/**
 * Root component of project
 *
 * @component
 */
function App() {
  const location = useLocation()

  return (
    <>
      <Nav />
      <Search />
      <Category />

      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/cuisine/:type' element={<Cuisine />} />
          <Route path='/search' element={<Result />} />
          <Route path='/recipe/:id' element={<Recipe />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}
