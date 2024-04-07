import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import { ApiProvider } from './hooks/useAnimalApi'

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
