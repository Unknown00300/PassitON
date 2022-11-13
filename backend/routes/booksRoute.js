const router = require('express').Router();
const bookModel = require('../models/booksModel');


//post request
router.post('/upload',async(req,res)=>{
	try {
		const data = req.body;
		const newbook = new bookModel(data);
		await newbook.save().then(()=>{
			res.status(200).json({message:"Book added"});
		});
		
 	}catch(error){
		console.log(error);
	}
})



router.get('/display', async(req,res) => {
	let books;
	try{
		books = await bookModel.find();
	res.status(200).json({books})
	}
	catch(error){
	console.log(error);
	}
})

router.get('/display/:id',async(req,res) =>{
	let book;
	const id = req.params.id;
	try{
		book=await bookModel.findById(id);
		res.status(200).json({book});
	}catch(error){
		console.log(error);
	}
})

//update books by id

router.put('/update/:id', async(req,res)=>{
	const id = req.params.id;
	const {name,edition} = req.body;
	let book;
	
	//const book = req.body.name;
	try{
		book=await bookModel.findByIdAndUpdate(id,{name,edition});
		res.status(200).json({book});
	//saving to database
	await book.save().then(()=> {res.json({message:"data updated"});
	});
	}
	catch(error){
		console.log(error);
	}
})

//delete book by id
router.delete('/delete/:id', async(req,res)=>{
	const id = req.params.id;
	try{
		await bookModel.findByIdAndDelete(id).then(()=> {
			res.status(201).json({message:"data deleted"});
		})
	}catch(error)
	{
		console.log(error);
	}
})


module.exports = router;