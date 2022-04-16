import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

import styles from './Veggie.module.css'
import { useVeggieRecipes } from '../../hooks'

const Veggie = () => {
  const [recipes, refetchRecipes] = useVeggieRecipes()

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

export default Veggie
