import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout'
import Home from './pages/Home'


const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>
  )
}

export default Router