import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'

const Layout = () => (
  <div className="flex flex-col min-h-screen bg-[color:var(--very-light-gray)] text-[color:var(--mostly-black-blue)]">
    <Navbar />
    <div className="container px-5 py-6 md:mx-auto flex-1">
      <Outlet />
    </div>
  </div>
)

export default Layout
