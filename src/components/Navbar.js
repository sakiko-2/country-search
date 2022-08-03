import {Link} from 'react-router-dom'

const Navbar = () => (
  <nav className="shadow-md bg-white">
    <div className="container flex items-center justify-between md:mx-auto px-3 py-5">
      <Link to="/" className="font-extrabold">
        Where in the world?
      </Link>
    </div>
  </nav>
)

export default Navbar
