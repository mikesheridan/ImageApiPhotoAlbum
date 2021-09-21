import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = props => {
  return (
    <header className='App-header'>
      <div className='info_row'>
        <div className='info'>
          <div className='hours'>Informational Text Here</div>
        </div>
      </div>
      <div className='nav_row'>
        <div className='App-logo'>
          <NavLink to='/' exact>
            Logo Here
          </NavLink>
        </div>
        <nav className='App-nav'>
          <ul>
            <li><NavLink to='/'>Header Links Here</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
