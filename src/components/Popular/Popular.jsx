import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

import styles from './Popular.module.css'
import { useQuery } from '../../hooks'

const Popular = () => {
  const [data] = useQuery(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_API_KEY}&number=16`)

  return (
    <div className={styles.container}>
      <h3>Popular Picks</h3>

      <Splide
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '5rem',
        }}
      >
        {data?.recipes?.map((recipe) => {
          return (
            <SplideSlide key={recipe.id} className={styles.recipeCard}>
              <p>{recipe.title}</p>
              <img src={recipe.image} alt={recipe.title} />
              <div className={styles.recipeCardGradient}></div>
            </SplideSlide>
          )
        })}
      </Splide>
    </div>
  )
}

export default Popular
