import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import { ApiProvider } from './hooks/useAnimalApi'

// TODO media queries for responsive design
// TODO search function going to the header after search and maintaining functionality
// TODO double check requirements
// TODO images need to be wider 


const App = () => {
  return (
    <ApiProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
  </ApiProvider>
  )
}

export default App
