const CountryCard = ({flag, name, population, region, capital}) => (
  <div className="relative drop-shadow-lg flex flex-col justify center h-full">
    <img
      variant="top"
      src={flag}
      className="rounded-t-md overflow-hidden border border-b-gray-300"
      alt={`flag of ${name}`}
    />
    <div className="bg-white flex flex-col flex-1 p-5 rounded-b-md">
      <h1 className="font-extrabold text-xl">{name}</h1>
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
  </div>
)

export default CountryCard
