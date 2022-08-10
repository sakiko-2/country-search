import {Link} from 'react-router-dom'

const CountryCard = ({code, flag, name, population, region, capital}) => (
  <Link
    to={`/country/${code}`}
    className="relative drop-shadow-lg flex flex-col justify center h-full dark:drop-shadow-[0_2px_2px_rgba(0,0,0,1)] dark:focus:outline-0 dark:focus:ring dark:focus:ring-indigo-500 dark:focus:ring-offset-0 dark:focus:rounded-md"
  >
    <img
      variant="top"
      src={flag}
      className="rounded-t-md overflow-hidden border border-b-gray-300 dark:border-[color:var(--dark-blue)]"
      alt={`flag of ${name}`}
    />
    <div className="flex flex-col flex-1 p-5 rounded-b-md bg-white dark:bg-[color:var(--dark-blue)]">
      <h1 className="font-extrabold text-xl mb-2">{name}</h1>
      <div className="normal-nums">
        <span className="font-semibold mr-1">Population:</span>
        {population.toLocaleString()}
      </div>
      <div>
        <span className="font-semibold mr-1">Region:</span>
        {region}
      </div>
      <div>
        <span className="font-semibold mr-1">Capital:</span>
        {capital || '-'}
      </div>
    </div>
  </Link>
)

export default CountryCard
