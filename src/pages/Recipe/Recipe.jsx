import { useState } from 'react'
import { useParams } from 'react-router-dom'

import styles from './Recipe.module.css'
import { useQuery } from '../../hooks'

const INSTRUCTIONS = 'INSTRUCTIONS'
const INGREDIENTS = 'INGREDIENTS'

const Recipe = () => {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState(INSTRUCTIONS)
  const [data] = useQuery(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${import.meta.env.VITE_API_KEY}`,
    { deps: [id] },
  )

  return (
    <div className={styles.recipeWrapper}>
      <div>
        <h2>{data?.title}</h2>
        <img src={data?.image} alt={data?.title} />
      </div>

      <div className={styles.info}>
        <button
          onClick={() => setActiveTab(INSTRUCTIONS)}
          className={`${styles.button} ${activeTab === INSTRUCTIONS ? styles.active : ''}`}
        >
          Instructions
        </button>
        <button
          onClick={() => setActiveTab(INGREDIENTS)}
          className={`${styles.button} ${activeTab === INGREDIENTS ? styles.active : ''}`}
        >
          Ingredients
        </button>

        {activeTab === INSTRUCTIONS &&
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: data?.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: data?.instructions }}></h3>
          </div>}

        {activeTab === INGREDIENTS &&
          <ul>
            {data?.extendedIngredients.map((ingredient) => {
              return (
                <li key={ingredient.id}>{ingredient.original}</li>
              )
            })}
          </ul>}
      </div>
    </div>
  )
}

export default Recipe
