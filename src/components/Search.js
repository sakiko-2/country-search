import {SearchIcon} from '@heroicons/react/outline'

const Search = ({handleInput, text}) => (
  <label className="relative w-screen rounded-md md:w-2/5">
    <SearchIcon className="pointer-events-none absolute left-2 h-7 w-7 translate-y-1/3 transform px-1 text-[color:var(--dark-gray)] dark:text-slate-400" />
    <input
      type="text"
      name="search"
      id="search"
      className="block w-full rounded-md border border-gray-300 py-2.5 pl-10 pr-12 text-neutral-900 text-[color:var(--dark-gray)] placeholder:text-neutral-400 focus:border-indigo-500 dark:border-[color:var(--very-dark-blue)] dark:bg-[color:var(--dark-blue)] dark:text-white dark:placeholder:text-slate-400 dark:focus:border-indigo-500 dark:focus:bg-slate-700 dark:focus:outline-0"
      placeholder="Search for a country..."
      onChange={(e) => handleInput(e.target.value)}
      value={text}
    />
  </label>
)

export default Search
