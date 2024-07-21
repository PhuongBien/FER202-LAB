import React, { useContext } from 'react'
import './Navigation.css'
import { ThemeContext } from '../ThemeContext'

export default function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext)
  return (
    <div className='navbar'>
        <nav style={{ backgroundColor: theme.navbar, color: theme.navbarText }} className="nav-container">
            <ul className="nav-header">
                <li>
                    <a style={{ color: theme.navbarText }} className="active" href='#home'>Home</a>
                </li>
                <li>
                    <a style={{ color: theme.navbarText }} className="active" href='#about'>About</a>
                </li>
                <li>
                    <a style={{ color: theme.navbarText }} className="active" href='#news'>News</a>
                </li>
                <li>
                    <a style={{ color: theme.navbarText }} className="active" href='#contact'>Contact</a>
                </li>
            </ul>
            <div style={{position: 'relative'}} className="switch">
                <a className='switch-mode' href='#' onClick={toggle}
                style={{
                    backgroundColor: theme.navbar,
                    color: theme.navbarText,
                    outline: 'none'
                }} data-testid="toggle-theme-btn"
                >
                {!dark ? 'Turn to dark mode' : 'Turn to light mode'}
                </a>
            </div>
        </nav>
    </div>
  )
}
