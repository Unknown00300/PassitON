import React from 'react'

import PropTypes from 'prop-types'
import {useState}from "react"
import {useEffect} from "react"
import {Link} from "react-router-dom";
import {Card,Button,Row,Col} from 'react-bootstrap'

import axios from 'axios'

const CartCard = ({item}) => {
	var bid=item._id
	console.log(bid)
		const [Data,setData] = useState([
	{
	name: "",
    author: "",
    costprice:0 ,
    sellingprice:0,
    image: ""
		}]);
	useEffect(()=> {
		
		fetch(`http://localhost:4000/api/cart`).then(res=>{
			if(res.ok){
				return res.json()
			}
		}).then(jsonRes=>setData(jsonRes))

	})

	const del = async(e)=>{
		e.preventDefault();
		 await axios
		 .delete(`http://localhost:4000/api/delete/${bid}`)
		 .then(function (response) {
           if (response.data.redirect == '/') {
				alert("Book has been deleted from cart")
                window.location = "/cart"
            }
            else if (response.data.redirect == '/cart'){
				alert("Book could not be deleted from cart")
				window.location = "/cart"
            
        }})
        .catch(function(error) {
           console.log(error)
        })
	}
	
	
  return (
  <Row >
  <Col md={4}>
<Card style={{ width: '18rem' ,marginTop:"10px"}}>
      <Card.Img   variant="top" src={item.image} style={{paddingBottom: '20px' ,width:'150px' ,float:'left' ,height:'150px'}}/>
      <Card.Body style={{paddingBottom: '40px',left:'40px' , position:'relative' }}>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
		
          Author : {item.author}
			<br/>
		Cost Price : {item.costprice}
		<br/>
		Selling Price : {item.sellingprice}
					<br/><button onClick={del} className="btn3"> Delete </button>

		</Card.Text>
        
      </Card.Body>
    </Card>
	</Col>
	</Row>
  )
}



export default CartCard;
