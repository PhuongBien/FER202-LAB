import { Button, Col, Container, Icon, Select, TextInput, Textarea } from 'react-materialize'

import React, { useContext } from 'react'
import { ThemeContext } from '../ThemeContext'

import './Contact.css'

export default function Contact() {
  const handleSubmit =(e)=> {
    e.preventDefault()
  }
  const { theme, toggle, dark } = useContext(ThemeContext)
  return (
    <div style={{width: '100%', marginTop: '-30px', paddingBottom:'180px', backgroundColor: theme.backgroundColor, color: theme.color }}>
      <Container>
        <Col style={{width: '80%'}}>
          <div>
            <h3 >Contact us</h3>
          </div>
          <form onSubmit={handleSubmit}>  
            <TextInput id="TextInput-38" label="Your Name"/>
            <TextInput id="TextInput-39" label="Your Phone"/>
            <TextInput email id ="TextInput-41" label="Email" validate/>
            <Select id="Select-46" multiple={false} onChange={function noRefCheck(){}} value="">
              <option disabled value="">
                Choose your favorite nation
              </option>
              <option value="1">
                Asian
              </option>
              <option value="2">
                Americas
              </option>
              <option value="3">
                Africa
              </option>
            </Select>
            <Textarea icon={<Icon>mode_edit</Icon>} id="Textarea-28" label="Your content"/>
            <Button>Submit</Button>
          </form>
        </Col>
      </Container>
    </div>
  )
}
