import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

import styles from './Cuisine.module.css'
import { useQuery } from '../../hooks'

const Cuisine = () => {
  const { type } = useParams()

  const [data] = useQuery(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&cuisine=${type}`,
    { deps: [type] }
  )

  return (
    <div className={styles.grid}>
      {data?.results?.map((result) => {
        return (
          <div key={result.id} className={styles.card}>
            <img src={result.image} alt={result.title} />
            <h4>{result.title}</h4>
          </div>
        )
      })}
    </div>
  )
}

export default Cuisine
