import { NavLink } from 'react-router-dom'
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiChopsticks } from 'react-icons/gi'

import styles from './Category.module.css'

const Category = () => {
  const navLinkClassName = ({ isActive }) => isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink

  return (
    <div className={styles.list}>
      <NavLink to='/cuisine/Italian' className={navLinkClassName}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </NavLink>

      <NavLink to='/cuisine/American' className={navLinkClassName}>
        <FaHamburger />
        <h4>American</h4>
      </NavLink>

      <NavLink to='/cuisine/Thai' className={navLinkClassName}>
        <GiNoodles />
        <h4>Thai</h4>
      </NavLink>

      <NavLink to='/cuisine/Japanese' className={navLinkClassName}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </NavLink>
    </div>
  )
}

export default Category
