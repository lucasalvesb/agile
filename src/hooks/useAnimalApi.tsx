import { useContext, createContext } from 'react' 
import { ApiProps, ApiInterface } from '../types';
import data from '../api/animals'

const ApiContext = createContext<ApiProps>({} as ApiProps)

const ApiProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const animalsApi: ApiInterface = {
    get: () => Promise.resolve(data),
  };

  return (
    <ApiContext.Provider value={{ animals: animalsApi }}>
      {children}
    </ApiContext.Provider>
  );
};

const useApi = () => {
  const context = useContext(ApiContext)
  
  if (!context) {
    throw new Error('useApi must be used within a SearchProvider')
  }

  return context
}

export { ApiProvider, useApi }