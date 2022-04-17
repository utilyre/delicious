import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

import styles from './Search.module.css'

const Search = () => {
  const [input, setInput] = useState('')
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    if (input) navigate(`/search?q=${input}`)
  }

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <FaSearch />
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  )
}

export default Search
