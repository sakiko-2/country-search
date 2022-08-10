import {SearchIcon} from '@heroicons/react/outline'

const Search = ({handleInput, text}) => (
  <label className="relative w-screen md:w-2/5 rounded-md ">
    <SearchIcon className="absolute transform translate-y-1/3 left-2 h-7 w-7 px-1 pointer-events-none text-[color:var(--dark-gray)] dark:text-slate-400" />
    <input
      type="text"
      name="search"
      id="search"
      className="w-full rounded-md text-neutral-900 placeholder:text-neutral-400 border border-gray-300 focus:border-indigo-500 text-[color:var(--dark-gray)] block pl-10 pr-12 py-2.5 dark:text-white dark:placeholder:text-slate-400 dark:bg-[color:var(--dark-blue)] dark:border-[color:var(--very-dark-blue)] dark:focus:border-indigo-500 dark:focus:bg-slate-700 dark:focus:outline-0"
      placeholder="Search for a country..."
      onChange={(e) => handleInput(e.target.value)}
      value={text}
    />
  </label>
)

export default Search
