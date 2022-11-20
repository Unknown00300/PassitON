import React from 'react'

import PropTypes from 'prop-types'

import {Link} from "react-router-dom";
import {Card,Button,Row,Col} from 'react-bootstrap'



const CartCard = ({item}) => {
  return (
  <Row >
  <Col md={4}>
<Card style={{ width: '18rem' ,marginTop:"10px"}}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
		
          Author : {item.author}
			<br/>
		Cost Price : {item.costprice}
		<br/>
		Selling Price : {item.sellingprice}
		</Card.Text>
        
      </Card.Body>
    </Card>
	</Col>
	</Row>
  )
}



export default CartCard;
