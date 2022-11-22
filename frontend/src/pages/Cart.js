import React from "react";
import {useState}from "react"
import {useEffect} from "react"
import axios from 'axios'
import {Container,Row,Col} from 'react-bootstrap';
import BookCard from '../components/card'
import ItemCard from '../components/cartcard'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";

const Cartdisplay = () =>{
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
		<Container style={{ top: '131px',  left: '186px',  width: '1120px',  height: '796px',position:'absolute'}}>
		<h2> Items inside Cart : </h2>
		<Row>
		
		{Data.map((item)=>(
		<Col md={4}>
			<ItemCard item={item}/>
			</Col>
		))}
		</Row>
		</Container>

		<Link to='/end'><button style={{left: '1000px',color: '#3C6E71',bottom: '150px', position: 'absolute',fontWeight: 'bold', fontSize:'20px',    backgroundColor: '#FFFFFF'}}> Place Order </button></Link>
			
		</>
	);
};

function Cart()
{
	return(
	<div>
	<Navbar/>
	<Cartdisplay/>
	<Footer/>
	</div>
	);
}

export default Cart;