import { useContext, createContext } from 'react' 
import { animals } from '../api/animals'
import { ApiProps, ApiProviderProps } from '../types'

const ApiContext = createContext<ApiProps>({} as ApiProps)

const ApiProvider = ({ children }: ApiProviderProps) => {
  return (
    <ApiContext.Provider value={{ animals }}>
      {children}
    </ApiContext.Provider>
  )
}

const useAnimalApi = () => {
  const context = useContext(ApiContext)
  
  if (!context) {
    throw new Error('useAnimalApi has to be used within a SearchProvider')
  }

  return context
}

export { ApiProvider, useAnimalApi }