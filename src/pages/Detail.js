import {useContext} from 'react'
import {useParams} from 'react-router-dom'
import {CountryContext} from '../App'
import BackButton from '../components/BackButton'
import ButtonLink from '../components/ButtonLink'

const Detail = () => {
  const data = useContext(CountryContext)
  const params = useParams()
  const detailData = data.find((item) => item.cca3 === params.code)

  function name(code) {
    return data.find((item) => item.cca3 === code).name.common
  }

  return (
    <>
      <div className="mb-6">
        <BackButton />
      </div>

      {detailData && (
        <main className="flex-1 grid grid-cols-1 lg:grid-cols-2">
          <div className="lg:mr-5">
            <img
              src={detailData.flags.svg}
              className="shadow-lg max-h-[70vh]"
              alt="flag"
            />
          </div>
          <div className="grid content-between px-6 py-5">
            <h1 className="font-extrabold text-3xl my-4">
              {detailData.name.common}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 text-base">
              <div className="pr-2 my-2">
                <p className="leading-loose">
                  <span className="font-semibold mr-1">Native Name:</span>
                  {detailData.name.nativeName
                    ? Object.values(detailData.name.nativeName).map(
                        (item) => `${item.official}, `,
                      )
                    : '-'}
                </p>
                <p className="leading-loose">
                  <span className="font-semibold mr-1">Population:</span>
                  {detailData.population.toLocaleString() || '-'}
                </p>
                <p className="leading-loose">
                  <span className="font-semibold mr-1">Region:</span>
                  {detailData.region || '-'}
                </p>
                <p className="leading-loose">
                  <span className="font-semibold mr-1">Sub Region:</span>
                  {detailData.subregion || '-'}
                </p>
                <p className="leading-loose">
                  <span className="font-semibold mr-1">Capital:</span>
                  {detailData.capital || '-'}
                </p>
              </div>

              <div className="my-3 md:my-2">
                <p className="leading-loose">
                  <span className="font-semibold mr-1">Top Level Domain:</span>
                  {detailData.tld || '-'}
                </p>
                <p className="leading-loose">
                  <span className="font-semibold mr-1">Currencies:</span>
                  {detailData.currencies
                    ? Object.values(detailData.currencies).map(
                        (item) => item.name,
                      )
                    : '-'}
                </p>
                <p className="leading-loose">
                  <span className="font-semibold mr-1">Languages:</span>
                  {detailData.languages
                    ? Object.values(detailData.languages)
                        .sort()
                        .map((item) => `${item}`)
                    : '-'}
                </p>
              </div>
            </div>
            <div className="my-3">
              <span className="leading-relaxed font-semibold mr-2 block md:inline-block">
                Border Countries:
              </span>
              {detailData.borders
                ? detailData.borders.map((item, i) => (
                    <ButtonLink item={item} name={name} key={i} />
                  ))
                : '-'}
            </div>
          </div>
        </main>
      )}
    </>
  )
}

export default Detail
