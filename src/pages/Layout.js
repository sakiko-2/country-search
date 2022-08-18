import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = () => (
  <div className="flex min-h-screen flex-col bg-[color:var(--light-background-color)] text-[color:var(--light-text-color)] dark:bg-[color:var(--dark-background-color)] dark:text-[color:var(--dark-text-color)]">
    <Navbar />
    <div className="container flex flex-1 flex-col px-5 py-6 sm:mx-auto">
      <Outlet />
    </div>
    <Footer />
  </div>
)

export default Layout
