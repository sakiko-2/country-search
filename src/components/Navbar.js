import {Link} from 'react-router-dom'
import {MoonIcon} from '@heroicons/react/outline'
import {useDarkMode} from '../hooks/useDarkMode'

const Navbar = () => {
  const [dark, setDark] = useDarkMode()

  return (
    <nav className="shadow-md bg-white dark:bg-[color:var(--dark-blue)] dark:shadow-black">
      <div className="container flex items-center justify-between md:mx-auto px-3 py-5">
        <Link to="/" className="font-extrabold">
          Where in the world?
        </Link>
        <div
          className="flex jusify-between items-center cursor-pointer"
          onClick={() => setDark(!dark)}
        >
          <MoonIcon className="mr-2 h-5 w-5" />
          <span>Dark Mode</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
