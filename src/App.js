import {createContext} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {useFetch} from './hooks/useFetch'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Detail from './pages/Detail'

export const CountryContext = createContext()

function App() {
  const {data, loading, error} = useFetch('https://restcountries.com/v3.1/all')

  if (loading) return <h1>Loading...</h1>
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>

  return (
    <CountryContext.Provider value={data}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/country/:code" element={<Detail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CountryContext.Provider>
  )
}

export default App
