const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// const userSchema = mongoose.Schema;

dotenv.config();

//import routes
const authRoute = require('./routes/auth');


//connect to db
mongoose.connect(process.env.DB_CONNECT,
{ useNewUrlParser: true } ,
 () => console.log('connect to db'));

// mongoose.connect('mongodb: //localhost:27017/admin'
// ,() => console.log('connected to db !!!'));
// mongoose.connect('mongodb://localhost:27017/authJwt', { useNewUrlParser: true });
// mongoose.connect('mongodb://localhost: 27017/admin');
// const  connection = mongoose.connection;

// connection.once('open', () => {
//         console.log('succeed!');
// });

//middleware
app.use(express.json());



//route middlewares
app.use('/api/user', authRoute);

app.listen(3000, () => console.log('Server Up and running'));
