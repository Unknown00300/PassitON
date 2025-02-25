import React from 'react'

import PropTypes from 'prop-types'

import {Link} from "react-router-dom";
import {Card,Button,Row,Col} from 'react-bootstrap'



const BookCard = ({book}) => {
  return (
 
          <Card  >
 

      <Card.Img variant="top" src={book.image} style={{width:'150px' ,height:'150px'}}/>
      <Card.Body>
        <Card.Title>{book.name}</Card.Title>
        <Card.Text>
		
          Author : {book.author}
		
		</Card.Text>
        <Link to={'book/' + book._id} ><Button variant="primary">View</Button></Link>
      </Card.Body>
    </Card>
  )
}



export default BookCard;
