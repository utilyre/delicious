import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

import styles from './Cuisine.module.css'
import { useQuery } from '../../hooks'

/**
 * React page component for showing cuisines
 *
 * @component
 * @example
 * return (
 *   <BrowserRouter>
 *     ...
 *     <Routes>
 *       ...
 *       <Route path='/cuisine/:type' element={<Cuisine />} />
 *       ...
 *     </Routes>
 *     ...
 *   </BrowserRouter/>
 * )
 */
const Cuisine = () => {
  const { type } = useParams()

  const [data] = useQuery(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&cuisine=${type}`,
    { deps: [type] }
  )

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.grid}
    >
      {data?.results?.map((result) => {
        return (
          <div key={result.id} className={styles.card}>
            <Link to={`/recipe/${result.id}`}>
              <img src={result.image} alt={result.title} />
              <h4>{result.title}</h4>
            </Link>
          </div>
        )
      })}
    </motion.div>
  )
}

export default Cuisine
