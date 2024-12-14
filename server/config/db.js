//gadakhabhijit - pdtfIAz5XBMeUI86
//mongodb+srv://gadakhabhijit:pdtfIAz5XBMeUI86@practicecluster.gdwxu.mongodb.net/?retryWrites=true&w=majority&appName=PracticeCluster
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_CONN)
    .then(()=>{
        console.log('MongoDB Connected...');
    }).catch((err)=>{
        console.log("Mongo connection Error: " + err);
    })