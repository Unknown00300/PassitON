import React from "react";
import {useState}from "react"
import {useEffect} from "react"
import axios from 'axios'
import {Container,Row,Col} from 'react-bootstrap';
import BookCard from '../components/card'
import ItemCard from '../components/cartcard'
const Cart = () =>{
	const [Data,setData] = useState([
	{
	name: "",
    author: "",
    costprice:0 ,
    sellingprice:0,
    image: ""
		}]);
	useEffect(()=> {
		
		fetch("http://localhost:4000/api/cart").then(res=>{
			if(res.ok){
				return res.json()
			}
		}).then(jsonRes=>setData(jsonRes));
		
	})
	
	
	return(
		<>
		<Container>
		<Row>
		
		{Data.map((item)=>(
		<Col md={4}>
			<ItemCard item={item}/>
			</Col>
		))}
		</Row>
		</Container>
		
			
		</>
	);
};

export default Cart;