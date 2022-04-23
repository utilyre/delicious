import { useState, useEffect } from 'react'
import axios from 'axios'

import { digest } from '../utils'

/**
 * Makes API calls, caches the response, and provides the response as react state
 *
 * @param {string} url Url of API endpoint
 * @param {{params: Object, cacheTimeout: number, deps: any[]}} [opts] Options
 *
 * @returns {[any, Function]}
 */
const useQuery = (url, opts = { params: {}, cacheTimeout: 3600000, deps: [] }) => {
  const [data, setData] = useState(null)

  const fetchData = async (invalidateCache = true) => {
    const cacheKey = await digest(`${url}:${JSON.stringify(opts.params)}`)
    if (!invalidateCache) {
      const rawCache = localStorage.getItem(cacheKey)
      if (rawCache) {
        const parsedCache = JSON.parse(rawCache)
        if (Date.now() - parsedCache.updatedAt <= opts.cacheTimeout) return setData(parsedCache.data)
      }
    }

    try {
      const { data } = await axios.get(url, { params: opts.params })

      localStorage.setItem(cacheKey, JSON.stringify({ updatedAt: Date.now(), data }))
      setData(data)
    } catch ({ message }) {
      console.error(message);
    }
  }

  useEffect(() => { fetchData(false) }, opts.deps)
  return [data, fetchData]
}

export default useQuery
