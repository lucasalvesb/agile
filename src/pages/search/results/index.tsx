import { Result } from '../../../types'
import './styles.css'

interface ResultProps {
  results: Result[];
  onSelect: (value: Result) => void;
}

const Results: React.FC<ResultProps> = ({ results, onSelect }) => {
  const handleSelect = (result: Result) => {
    onSelect(result)
  }

  return (
    <ul className={`results-container`}>
      {
        results.map((result, index) =>
          <li key={`result-${index}`} className='result-item'>
            <>
              <a>{result.url}</a>
              <h3 onClick={() => handleSelect(result)}>{result.title}</h3>
              <span>{result.description}</span>
            </>
          </li>
        )
      }
    </ul>
  )
}

export default Results