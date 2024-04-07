import { useState, MouseEvent } from 'react'
import { PreviewProps } from '../../../types/index'

import './styles.css'



const Preview: React.FC<PreviewProps> = ({ result, onSelectItem }) => {
  const [loaded, setLoaded] = useState(false)

  const handleClickContent = (evt: MouseEvent<HTMLDivElement>) => {
    evt.stopPropagation()
  }

  const handleClickOutside = () => {
    onSelectItem(null)
  }

  return (
    <div className={`preview-modal ${loaded ? `loaded` : ``}`} onClick={handleClickOutside}>
      <div className='preview-modal-content' onClick={handleClickContent}>
        <img
          src={result.image}
          onLoad={() => setLoaded(true)}
          alt={result.type} />
        <span className='preview-url'>{result.url}</span>
        <h4 className='preview-title'>{result.title}</h4>
        <span className='preview-description'>{result.description}</span>
      </div>
    </div>
  )
}

export default Preview