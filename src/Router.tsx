import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout'


const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
      </Route>
    </Routes>
  )
}

export default Router