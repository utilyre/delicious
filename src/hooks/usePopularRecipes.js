import { useState, useEffect } from 'react'
import axios from 'axios'

const usePopularRecipes = () => {
  const [recipes, setRecipes] = useState(null)

  const fetchRecipes = async () => {
    const response = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_API_KEY}&number=9`)
    setRecipes(response.data.recipes)
  }

  useEffect(() => {
    fetchRecipes()
  }, [])

  return [recipes, fetchRecipes]
}

export default usePopularRecipes
