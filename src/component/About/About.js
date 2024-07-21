import './About.css'
import React, { useContext } from 'react'
import { Collapsible, CollapsibleItem, Container, Icon } from 'react-materialize'
import { ThemeContext } from '../ThemeContext'

export default function About() {
  const { theme, toggle, dark } = useContext(ThemeContext)
  return (
    <div style={{backgroundColor: theme.backgroundColor, color: theme.color, width: '100%', paddingTop:'10px', paddingBottom: '500px', display: 'flex', justifyContent: 'center'}}>
      <Collapsible accordion={false} style={{width: '80%', backgroundColor: 'white'}}>
        <CollapsibleItem
          expanded={false}
          header="THE TEAM"
          icon={<Icon>people</Icon>}
          node="div"
          style={{color: 'black'}}
          className='my-element'
        >
          Here you can see the orchids information
        </CollapsibleItem>
        <CollapsibleItem
          expanded={false}
          header="Nations"
          icon={<Icon>place</Icon>}
          node="div"
          style={{color: 'black'}}
          className='my-element'
        >
          Asia, Americas, Africa
        </CollapsibleItem>
        <CollapsibleItem
          expanded={false}
          header="Daily news"
          icon={<Icon>whatshot</Icon>}
          node="div"
          style={{color: 'black'}}
          className='my-element'
        >
          Loadinggg... 
        </CollapsibleItem>
      </Collapsible>
    </div>
  )
}
