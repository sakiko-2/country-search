import {useEffect, useState} from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!url) return

    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .then(() => setLoading(false))
      .catch((error) => setError(error))
  }, [url])

  return {data, loading, error}
}

export default useFetch
