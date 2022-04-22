import { Link } from 'react-router-dom'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

import styles from './Veggie.module.css'
import { useQuery } from '../../hooks'

/**
 * React component for vegetarian food splide
 *
 * @component
 * @example
 * return (
 *   <Veggie />
 * )
 */
const Veggie = () => {
  const [data] = useQuery(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_API_KEY}&number=9&tags=vegetarian`)

  return (
    <div className={styles.container}>
      <h3>Our Vegetarian Picks</h3>

      <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '5rem',
        }}
      >
        {data?.recipes?.map((recipe) => {
          return (
            <SplideSlide key={recipe.id} className={styles.recipeCard}>
              <Link to={`/recipe/${recipe.id}`}>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
                <div className={styles.recipeCardGradient}></div>
              </Link>
            </SplideSlide>
          )
        })}
      </Splide>
    </div>
  )
}

export default Veggie
