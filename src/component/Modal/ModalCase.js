import { ThemeContext } from '../ThemeContext'
import './ModalCase.css'

import React, { useContext } from 'react'

export default function ModalCase({ setIsOpen, orchids }) {

  const { theme, toggle, dark } = useContext(ThemeContext)
  return (
    <div className='modal-show' onClick={() => setIsOpen(false)} style={{ backgroundColor: theme.backgroundColor }}>
      <div id="modal1" className='modal' style={{ display: 'block', top: '35%', backgroundColor: theme.navbarBackground }}>
        <div className='modal-content'>
          <h4 style={{ color: theme.color }}>Video for {orchids.name}</h4>
          <p><iframe width="100%" height="400px" src={orchids.video} title={orchids.name} frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen /></p>
        </div>
        <div className='modal-footer' style={{ backgroundColor: theme.navbarBackground }}>
          <a className='modal-close red-text'>Close</a>
        </div>
      </div>
    </div>
  )
}
