import { useSearchParams } from 'react-router-dom'

import styles from './Result.module.css'
import { useQueryRecipes } from '../../hooks'

const Result = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q')

  const [recipes, refetchRecipes] = useQueryRecipes(query)

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

export default Result
