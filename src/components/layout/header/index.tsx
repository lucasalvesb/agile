import ProfilePicure from "../../../assets/profile_icon.png"
import GoogleLogo from "../../../assets/google_logo.svg"
import Input from '../../Input'


import { useMemo, useEffect, useState, ChangeEvent, KeyboardEvent } from 'react'
import { useLocation, useNavigate } from "react-router-dom"

import "./styles.css"


const Header = () => {

  const [text, setText] = useState("")
  const location = useLocation()
  const navigate = useNavigate()
  const isSearchPage = useMemo(() => {
    if (location.pathname === '/search') return true
    return false
  }, [location.pathname])

  useEffect(() => {
    const query = new URLSearchParams(location.search).get('q')
    if (query) {
      setText(query)
    }
  }, [location])


  const handleMainPage = () => {
    navigate({
      pathname: '/'
    })
  }

  const handlePressEnter = (evt: KeyboardEvent<HTMLInputElement>) => {
    const inputValue = (evt.target as HTMLInputElement).value;
    if (evt.key === 'Enter') {
      navigate({
        pathname: '/search',
        search: `?q=${inputValue}`
      })
    }
  }

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    if (evt && evt.target) {
      setText(evt.target.value)
    }
  }

return (
  <>
  <header className="header-main">
    {
    !isSearchPage ?
    <span><strong>Agile Content</strong> Frontend test</span>
    :
    <div className="header-left">
      <img className='google-logo' onClick={handleMainPage} src={GoogleLogo} />
      <Input style={{ minHeight: 36, minWidth: 320 }} value={text} onKeyPress={handlePressEnter} onChange={handleChange} />
    </div>
    }
    <div className="header-right">
      <div className="icon-wrap">
        <svg className="gb_i" focusable="false" viewBox="0 0 24 24">
          <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
        </svg>
      </div>
      <img className="profile-picture" src={ProfilePicure} />
    </div>
  </header>
      <div className="header-bottom"></div>
  </>
)
}

export default Header