const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://poojarajan2217:pooja123@cluster0.waoy1.mongodb.net/providence?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
    console.log("connected to mongoDB")
    })
    .catch((err)=> {
    console.log(err);
})