import React, { useContext } from 'react'
import { Icon, Navbar } from 'react-materialize'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../ThemeContext.js'
import './NavigationUI.css'

export default function NavigationUI() {
  const { theme, toggle, dark } = useContext(ThemeContext)
  return (
    <div className='navbarUI'>
        <Navbar /*className='menu blue darken-4'*/
                alignLinks="right"
                brand={<span className="brand-logo" style={{color: theme.color}}>Orchids Information</span>}
                id="mobile-nav"
                menuIcon={<Icon>menu</Icon>}
                style={{ backgroundColor: theme.navbarBackground, color: theme.color }} 
                >
            <ul>
                <li> <Link to='/' style={{color: theme.color}}> <Icon left>home</Icon> Home</Link></li>
                <li to='/about'> <Link to='/about' style={{color: theme.color}}> <Icon left>info_outline</Icon> About </Link></li>
                <li to='/news'> <Link to='/news' style={{color: theme.color}}> <Icon left>dvr</Icon> News </Link></li>
                <li to='/contact'> <Link to='/contact' style={{color: theme.color}}> <Icon left>contacts</Icon> Contact </Link></li>
            </ul>
            <div style={{position: 'relative'}} className="switch">
                <a className='switch-mode' href='#' onClick={toggle}
                style={{
                    backgroundColor: theme.navbarBackground,
                    color: theme.color,
                    outline: 'none'
                }} data-testid="toggle-theme-btn"
                >
                <Icon left>lens</Icon>Switch Nav to {!dark ? 'Dark' : 'Light'} mode
                </a>
            </div>
        </Navbar>
    </div>
  )
}
