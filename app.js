const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
require('dotenv/config');

app.use(bodyparser.json());

//importing routes
const postsRoute = require('./routes/posts');

//middleware
app.use('/posts', postsRoute);

//creating database

mongoose.connect(
    process.env.DB_CONNECTION, 
    { useNewUrlParser: true, useUnifiedTopology: true },
    () =>  console.log("connect to database")
);


/*const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://azam:22778572@cluster0.pss3z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});*/


/*//middleware running
app.use('/posts',()=>{
    console.log('middlware running');
});*/

//routes
app.get('/', (req,res)=>{
    res.send('we are home');
});

/*app.get('/posts', (req,res)=>{
    res.send('we are on post');
});*/


//listening to server
app.listen(3000,()=>{
    console.log('server is live');
});

