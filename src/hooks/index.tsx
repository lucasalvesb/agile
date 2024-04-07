import { PropsWithChildren } from 'react'
import { ApiProvider } from './useAnimalApi.tsx'

export const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ApiProvider>
      {children}
    </ApiProvider>
  )
}