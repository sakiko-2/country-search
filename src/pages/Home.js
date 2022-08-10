import {useContext, useState} from 'react'
import {CountryContext} from '../App'
import CountryCard from '../components/CountryCard'
import Search from '../components/Search'
import Dropdown from '../components/Dropdown'

const Home = () => {
  const [text, setText] = useState('')
  const [region, setRegion] = useState()
  const data = useContext(CountryContext)

  function sortByName(data) {
    return data.sort((a, b) => (a.name.common > b.name.common ? 1 : -1))
  }

  function handleInput(value) {
    setText(value)
  }

  function filterData(data, text) {
    return text.length > 0
      ? data.filter((item) =>
          item.name.common.toLowerCase().includes(text.toLowerCase()),
        )
      : data
  }

  function getRegions(data) {
    let regions = data.map((item) => item.region)
    return [...new Set(regions)].sort()
  }

  function handleSelect(option) {
    setRegion(option)
  }

  function filterRegions(data, region) {
    return region ? data.filter((item) => item.region === region) : data
  }

  return (
    <main>
      <div className="flex justify-start md:justify-between flex-wrap md:flex-nowrap gap-y-8 mb-3">
        <Search handleInput={handleInput} text={text} />
        <Dropdown
          options={getRegions(data)}
          handleSelect={handleSelect}
          region={region}
        />
      </div>
      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-5 mt-9 text-sm">
        {data &&
          sortByName(filterData(filterRegions(data, region), text)).map(
            (item, i) => (
              <CountryCard
                code={item.cca3}
                flag={item.flags.png}
                name={item.name.common}
                population={item.population}
                region={item.region}
                capital={item.capital}
                key={i}
              />
            ),
          )}
      </div>
    </main>
  )
}

export default Home
