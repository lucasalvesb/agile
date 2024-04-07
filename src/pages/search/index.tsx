import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Result } from '../../types'
import { useAnimalApi } from '../../hooks/useAnimalApi'

import './styles.css'
import Results from './results'
import Preview from './preview'

const Search = () => {
  const [results, setResults] = useState<Result[]>([])
  const [selectedItem, setSelectedItem] = useState<Result | null>()
  const { animals } = useAnimalApi()
  const location = useLocation()
  const query = new URLSearchParams(location.search).get('q')?.toLowerCase()

  const fetchData = async () => {
    await animals.get().then((response: Result[]) => {
      const animals: Result[] = response.filter((animal: Result) => animal.type === query || animal.title === query)
      setResults(animals)
    })
  }

  useEffect(() => {
    setSelectedItem(null)
    fetchData()
  }, [location])

  return (
    <div className='search-page-container'>
      <div className='search-content'>
        {
          <>
        <Results
        results={results}
        onSelect={(result: Result) => setSelectedItem(result)} />
        {
          selectedItem &&
          <Preview result={selectedItem} onSelectItem={setSelectedItem}/>
        }
        </>
        }
      </div>
    </div>
  )
}

export default Search