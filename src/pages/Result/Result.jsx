import { useSearchParams } from 'react-router-dom'

import styles from './Result.module.css'
import { useQuery } from '../../hooks'

/**
 * React page component for displaying search results
 *
 * @component
 * @example
 * return (
 *   <BrowserRouter>
 *     ...
 *     <Routes>
 *       ...
 *       <Route path='/search' element={<Home />} />
 *       ...
 *     </Routes>
 *     ...
 *   </BrowserRouter/>
 * )
 */
const Result = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q')

  const [data] = useQuery(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&query=${query}`,
    { deps: [query] }
  )

  return (
    <div className={styles.grid}>
      {data?.results?.map((recipe) => {
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
