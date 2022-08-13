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

  function formatArray(arr) {
    return [
      ...new Set(
        arr.map((item, i) => (i + 1 === arr.length ? item : `${item}, `)),
      ),
    ]
  }

  function formatNativeName(arr) {
    let uniq = [...new Set(Object.values(arr).map((item) => item.official))]
    return uniq.map((item, i) => (uniq.length - 1 !== i ? `${item}, ` : item))
  }

  return (
    <>
      <div className="mb-6">
        <BackButton />
      </div>

      {detailData && (
        <main className="grid flex-1 grid-cols-1 lg:grid-cols-2">
          <div className="lg:mr-5">
            <img
              src={detailData.flags.svg}
              className="max-h-[70vh] shadow-lg"
              alt="flag"
            />
          </div>
          <div className="flex flex-col items-start px-6 py-5">
            <h1 className="my-4 text-3xl font-extrabold">
              {detailData.name.common}
            </h1>
            <div className="flex w-full flex-wrap text-base md:mb-10">
              <div className="my-2 w-full pr-3 md:w-1/2">
                <p className="leading-loose">
                  <span className="mr-1 font-semibold">Native Name:</span>
                  {detailData.name.nativeName
                    ? formatNativeName(detailData.name.nativeName)
                    : '-'}
                </p>
                <p className="leading-loose">
                  <span className="mr-1 font-semibold">Population:</span>
                  {detailData.population.toLocaleString() || '-'}
                </p>
                <p className="leading-loose">
                  <span className="mr-1 font-semibold">Region:</span>
                  {detailData.region || '-'}
                </p>
                <p className="leading-loose">
                  <span className="mr-1 font-semibold">Sub Region:</span>
                  {detailData.subregion || '-'}
                </p>
                <p className="leading-loose">
                  <span className="mr-1 font-semibold">Capital:</span>
                  {detailData.capital || '-'}
                </p>
              </div>

              <div className="my-3 w-full md:my-2 md:w-1/2">
                <p className="leading-loose">
                  <span className="mr-1 font-semibold">Top Level Domain:</span>
                  {detailData.tld || '-'}
                </p>
                <p className="leading-loose">
                  <span className="mr-1 font-semibold">Currencies:</span>
                  {detailData.currencies
                    ? Object.values(detailData.currencies).map(
                        (item) => item.name,
                      )
                    : '-'}
                </p>
                <p className="leading-loose">
                  <span className="mr-1 font-semibold">Languages:</span>
                  {detailData.languages
                    ? formatArray(Object.values(detailData.languages).sort())
                    : '-'}
                </p>
              </div>
            </div>
            <div className="my-3">
              <span className="mr-2 block font-semibold leading-relaxed md:inline-block">
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
