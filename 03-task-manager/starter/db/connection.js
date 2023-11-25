const mongoose = require('mongoose');

//const connectionString = 'mongodb+srv://sinharajath0:123456R@cluster0.j6n0k7g.mongodb.net/yourdatabase';

const connectDB =(url)=>{

    return mongoose.connect(url,{
        useNewUrlParser: true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true,
    })
}
//MONGO_URI=mongodb+srv://rajathsinha:123456R@cluster0.3se5dau.mongodb.net/TaskManagers?retryWrites=true&w=majority

module.exports= connectDB;
