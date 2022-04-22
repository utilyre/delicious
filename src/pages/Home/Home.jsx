import { motion } from 'framer-motion'

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
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Veggie />
      <Popular />
    </motion.div>
  )
}

export default Home
