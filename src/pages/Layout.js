import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = () => (
  <div className="flex min-h-screen flex-col bg-[color:var(--very-light-gray)] text-[color:var(--mostly-black-blue)] dark:bg-[color:var(--very-dark-blue)] dark:text-white">
    <Navbar />
    <div className="container flex flex-1 flex-col px-5 py-6 sm:mx-auto">
      <Outlet />
    </div>
    <Footer />
  </div>
)

export default Layout
