const mongoose = require('mongoose'); 
let url= 'mongodb+srv://admin:admin@cluster0.l6w9x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect( url,{useNewUrlParser: true , useUnifiedTopology:true}) 
.then(()=>console.log('mongodb is up ')) 
.catch(err=>console.log('mongodb is down because :',err))