import { useState, useEffect } from 'react'
import { Result, SearchState } from '../../types'
import { useLocation } from 'react-router-dom'
import { useAnimalApi } from '../../hooks/useAnimalApi'

import Results from './Results'
import Preview from './Preview'
import Loading from './Loading'
import Empty from './Empty'

import './styles.css'

const Search = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [results, setResults] = useState<Result[]>([])
  const [selectedItem, setSelectedItem] = useState<Result | null>()
  const [previousText, setPreviousText] = useState<string | undefined>('')
  const { animals } = useAnimalApi()
  const location = useLocation()
  const query = new URLSearchParams(location.search).get('q')?.toLowerCase()

  const fetchData = async () => {
    await animals.get().then((response: Result[]) => {
      const animals: Result[] = response.filter((animal: Result) => animal.type === query || animal.title === query)
      setResults(animals)
      setPreviousText(query)
      setIsLoading(false)
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
          (isLoading || previousText != query) ?
            <Loading /> :
            (query === '' || results.length == 0) ?
              <Empty
                state={query === '' ? SearchState.INVALID : SearchState.EMPTY} 
                text={query}/> :
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