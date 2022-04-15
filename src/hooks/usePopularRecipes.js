import { useState, useEffect } from 'react'
import axios from 'axios'

const LS_POPULAR_RECIPES = 'POPULAR_RECIPES'

const usePopularRecipes = () => {
  const [recipes, setRecipes] = useState(null)

  const fetchRecipes = async () => {
    const rawCache = localStorage.getItem(LS_POPULAR_RECIPES)
    if (rawCache) {
      const parsedCache = JSON.parse(rawCache)
      if (Date.now() - parsedCache.updatedAt < 3600000) return setRecipes(parsedCache.data)
    }

    const { data } = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_API_KEY}&number=16`)
    setRecipes(data.recipes)

    localStorage.setItem(
      LS_POPULAR_RECIPES,
      JSON.stringify({
        updatedAt: Date.now(),
        data: data.recipes,
      })
    )
  }

  useEffect(() => {
    fetchRecipes()
  }, [])

  return [recipes, fetchRecipes]
}

export default usePopularRecipes
