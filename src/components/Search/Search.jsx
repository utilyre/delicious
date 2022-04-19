import { useEffect, useRef, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

import styles from './Search.module.css'

const Search = () => {
  const [searchParams] = useSearchParams()
  const [input, setInput] = useState(searchParams.get('q') || '')
  const refInput = useRef()
  const navigate = useNavigate()

  useEffect(() => {
    refInput.current.focus()
  }, [])

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
        ref={refInput}
      />
    </form>
  )
}

export default Search
