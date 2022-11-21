const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://username:password%40cluster@cluster0.ghqtym1.mongodb.net/passiton?retryWrites=true&w=majority")
.then(()=>console.log("db connected"));
