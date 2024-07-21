import React, { useContext, useState } from 'react'
import './Orchids.css'
import { ListOrchids } from '../SharedData/ListOfOrchids'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../ThemeContext'

export default function Orchids() {
  const { theme, toggle, dark } = useContext(ThemeContext)
  const [orchids, setOrchids] = useState([])
  return (
    <div className='container' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
        {ListOrchids.map((orchids) => (
            <div key={orchids.id} className='column'>
                <div className='card'>
                    <img src={orchids.image}/>
                    <h3>{orchids.name}</h3>
                    <p>Color: {orchids.color}</p>
                    <p>Nation: {orchids.origin}</p>
                    <p className='detail-btn'>
                        <Link to={`detail/${orchids.id}`}> 
                            <p><button>Detail</button></p>
                        </Link>
                    </p>
                </div>
            </div>
        ))}
    </div>
  )
}

/*
export default function Players() {
    const [player, setPlayer] = useState([])
  return (
    <div className='container'>
        {ListPlayers.map((player) => (
            <div key={player.id} className='column'>
                <div className='card'>
                    <img src={player.img}></img>
                    <h3>{player.name}</h3>
                    <p className='title'>{player.club}</p>
                    <p className='detail-btn'>
                        // <button onClick={() => {setPlayer(player)}}>
                        //     <a href='#popup1' id='openPopUp'>Detail</a>
                        // </button> 
                        <Link to={`detail/${player.id}`}> 
                            <p><button>Detail</button></p>
                        </Link>
                    </p>
                </div>
            </div>
        ))}
        <div id='popup1' className='overlay'>
            <div className='popup'>
                <img src={player.img}/>
                <h2>{player.name}</h2>
                <a className='close' href='#'>&times;</a>
                <div className='content'>
                    {player.info}
                </div>
            </div>
        </div>
    </div>   
    )
}

*/