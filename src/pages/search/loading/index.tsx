import Skeleton from '../../../components/Skeleton'
import './styles.css'

const Loading = () => {
  return (
    <ul className='loading-list'>
      {Array(5).fill(0).map((_, index) => <li key={`loading-item-${index}`} className='loading-item'>
        <Skeleton />
      </li>)
      }
    </ul>
  )
}

export default Loading
