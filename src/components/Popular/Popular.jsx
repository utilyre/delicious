import { useState, useEffect } from 'react'
import axios from 'axios'

import styles from './Popular.module.css'

const Popular = () => {
  const [recipes, setRecipes] = useState(null)

  const getPopularRecipes = async () => {
    const response = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_API_KEY}&number=9`)
    setRecipes(response.data.recipes)
  }

  useEffect(() => {
    getPopularRecipes()
  }, [])

  return (
    <div className={styles.container}>
      <h3>Popular Picks</h3>
      {recipes?.map((recipe) => {
        return (
          <div key={recipe.id} className={styles.recipeCard}>
            <p>{recipe.title}</p>
            <img src={recipe.image} alt={recipe.title} />
          </div>
        )
      })}
    </div>
  )
}

export default Popular
