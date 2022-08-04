import {BrowserRouter, Route, Routes} from 'react-router-dom'
import useFetch from './hooks/useFetch'
import Home from './pages/Home'
import Layout from './pages/Layout'

function App() {
  const {data, loading, error} = useFetch('https://restcountries.com/v3.1/all')

  if (loading) return <h1>Loading...</h1>
  if (error) return

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
