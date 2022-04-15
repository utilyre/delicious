import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

import styles from './Popular.module.css'
import usePopularRecipes from '../../hooks/usePopularRecipes'

const Popular = () => {
  const [recipes, refetchRecipes] = usePopularRecipes()

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
        {recipes?.map((recipe) => {
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
