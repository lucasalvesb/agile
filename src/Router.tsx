import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout'
import Home from './pages/Home'
import Search from './pages/Search'


const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
      </Route>
    </Routes>
  )
}

export default Router