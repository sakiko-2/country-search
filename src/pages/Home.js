import {useContext} from 'react'
import {CountryContext} from '../App'
import CountryCard from '../components/CountryCard'

const Home = () => {
  const data = useContext(CountryContext)

  function sortByName(data) {
    return data.sort((a, b) => (a.name.common > b.name.common ? 1 : -1))
  }

  return (
    <>
      <main className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-5 mt-9 text-sm">
        {data &&
          sortByName(data).map((item, i) => (
            <CountryCard
              flag={item.flags.png}
              name={item.name.common}
              population={item.population}
              region={item.region}
              capital={item.capital}
              key={i}
            />
          ))}
      </main>
    </>
  )
}

export default Home
