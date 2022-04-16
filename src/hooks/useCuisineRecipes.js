import { useState, useEffect } from 'react'
import axios from 'axios'

const LS_CUISINE_RECIPES = 'CUISINE_RECIPES'

const useCuisineRecipes = (name) => {
  const [recipes, setRecipes] = useState(null)

  const fetchRecipes = async () => {
    const rawCache = localStorage.getItem(`${LS_CUISINE_RECIPES}:${name}`)
    if (rawCache) {
      const parsedCache = JSON.parse(rawCache)
      if (Date.now() - parsedCache.updatedAt < 3600000) return setRecipes(parsedCache.data)
    }

    const { data } = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&cuisine=${name}`)
    setRecipes(data.results)

    localStorage.setItem(
      `${LS_CUISINE_RECIPES}:${name}`,
      JSON.stringify({
        updatedAt: Date.now(),
        data: data.results,
      })
    )
  }

  useEffect(() => {
    fetchRecipes()
  }, [name])

  return [recipes, fetchRecipes]
}

export default useCuisineRecipes
