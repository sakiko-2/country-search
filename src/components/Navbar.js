import {Link} from 'react-router-dom'
import {MoonIcon} from '@heroicons/react/outline'
import {useDarkMode} from '../hooks/useDarkMode'

const Navbar = () => {
  const [dark, setDark] = useDarkMode()

  return (
    <nav className="bg-[color:var(--light-primary-color)] shadow-md dark:bg-[color:var(--dark-primary-color)] dark:shadow-black">
      <div className="container flex items-center justify-between px-3 py-4 md:mx-auto">
        <Link to="/" className="rounded p-1 font-extrabold">
          Where in the world?
        </Link>
        <button
          className="jusify-between flex items-center rounded p-1"
          onClick={() => setDark(!dark)}
        >
          <MoonIcon className="mr-2 h-5 w-5" />
          <span>Dark Mode</span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
