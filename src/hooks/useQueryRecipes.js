import { useState, useEffect } from 'react'
import axios from 'axios'

const useQueryRecipes = (query) => {
  const [recipes, setRecipes] = useState(null)

  const fetchRecipes = async () => {
    const { data } = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&query=${query}`)
    setRecipes(data.results)
  }

  useEffect(() => {
    fetchRecipes()
  }, [query])

  return [recipes, fetchRecipes]
}

export default useQueryRecipes
