import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

import styles from './Cuisine.module.css'
import { useCuisineRecipes } from '../../hooks'

const Cuisine = () => {
  const { type } = useParams()
  const [recipes, refetchRecipes] = useCuisineRecipes(type)

  return (
    <div className={styles.grid}>
      {recipes?.map((recipe) => {
        return (
          <div key={recipe.id} className={styles.card}>
            <img src={recipe.image} alt={recipe.title} />
            <h4>{recipe.title}</h4>
          </div>
        )
      })}
    </div>
  )
}

export default Cuisine
