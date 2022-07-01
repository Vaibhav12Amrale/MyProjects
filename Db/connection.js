
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://vaibhav:vaibhav12@cluster0.3koju.mongodb.net/rest_api?retryWrites=true&w=majority").then(()=>{
    console.log("Database Connected")
}).catch((err)=>{
    console.log(`${err}`);
})