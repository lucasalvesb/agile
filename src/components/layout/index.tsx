import Header from './header'
import Footer from './footer'
import './styles.css'
import { Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <div className='layout-container'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout