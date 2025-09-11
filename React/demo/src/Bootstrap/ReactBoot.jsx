import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Dropdown  from 'react-bootstrap/Dropdown';
import FooterMDB from './FooterMDB';

function ReactBoot() {
  return (
    <div>
      <div className="container">
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
            pages
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">home</Dropdown.Item>
        <Dropdown.Item href="#/action-2">About</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    
    <FooterMDB />
      </div>
    </div>
  )
}

export default ReactBoot
