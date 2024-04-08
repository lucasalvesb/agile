import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Input from '../../components/Input'
import GoogleLogo from '../../assets/google_logo.svg'
import './styles.css'

const Home = () => {
  const [text, setText] = useState('')
  const navigate = useNavigate()

  const handleSearch = () => {
    navigate({
      pathname: '/search',
      search: `?q=${text}`
    })
  }

  const handlePressEnter = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === 'Enter' && text !== '') {
      handleSearch()
    }
  }

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setText((evt.target.value))
  }

  return (
    <div className='home-container'>
      <img className="google-logo" src={GoogleLogo} />
      <div className='search-container'>
        <div className='input-wrapper'>
          <Input
          value='' 
          onChange={handleChange} 
          onKeyPress={handlePressEnter}
          style={{ minHeight: 36, minWidth: 380 }} />
        </div>
        <button className='search-btn' onClick={handleSearch} disabled={text.length === 0} type='button'>Buscar</button>
      </div>
    </div>
  )
}

export default Home