import {SearchIcon} from '@heroicons/react/outline'

const Search = ({handleInput, text}) => (
  <label className="relative w-screen md:w-2/5 text-[color:var(--dark-gray)]">
    <SearchIcon className="absolute transform translate-y-1/3 left-2 h-7 w-7 px-1 pointer-events-none" />
    <input
      type="text"
      name="search"
      id="search"
      className="w-full border border-gray-300 focus:border-indigo-500 text-[color:var(--dark-gray)] block pl-10 pr-12 py-2.5 rounded-md"
      placeholder="Search for a country..."
      onChange={(e) => handleInput(e.target.value)}
      value={text}
    />
  </label>
)

export default Search
