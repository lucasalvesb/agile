import { EmptyStateProps, SearchState } from '../../../types'
import './styles.css'



const EmptyState:React.FC<EmptyStateProps> = ({ state, text }) => {
  return (
    <div>
      {
        state == SearchState.EMPTY &&
        <div className='no-results'>
          <span>No results found for <strong>'{text}'</strong>.</span>
          <br />
        </div>
      }
      <span>Try looking for: <strong>insect, fish, horse, crocodillia, bear, cetacean, cow, lion, rabbit, cat, snake, dog, bird.</strong></span>
    </div>
  )
}

export default EmptyState