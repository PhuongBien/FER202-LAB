import React, { useContext } from 'react'
import { ThemeContext } from '../ThemeContext'

export default function FooterUI() {
    const { theme, toggle, dark } = useContext(ThemeContext)
  return (
    <div style={{textAlign: 'center', backgroundColor: theme.navbarBackground, color: theme.color,
        position: 'fixed', bottom: '0', width: '100%', 
        borderTop: '2px solid grey', }}>
        copyright &#169; 2024
    </div>
  )
}
