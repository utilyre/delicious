import styles from './Home.module.css'
import { Veggie, Popular } from '../../components'

/**
 * React page component of home
 *
 * @component
 * @example
 * return (
 *   <BrowserRouter>
 *     ...
 *     <Routes>
 *       ...
 *       <Route path='/' element={<Home />} />
 *       ...
 *     </Routes>
 *     ...
 *   </BrowserRouter/>
 * )
 */
const Home = () => {
  return (
    <div>
      <Veggie />
      <Popular />
    </div>
  )
}

export default Home
