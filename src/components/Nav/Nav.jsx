import { Link } from 'react-router-dom'
import { GiKnifeFork } from 'react-icons/gi'

import styles from './Nav.module.css'

const Logo = () => {
  return (
    <div className={styles.nav}>
      <GiKnifeFork />
      <Link to='/' className={styles.logo}>delicious</Link>
    </div>
  )
}

export default Logo
