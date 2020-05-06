const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

//DB config
const db =require ('./config/key').mongoURI;

//Connect to Moongo
mongoose.connect(db, {useNewUrlParser : true, useCreateIndex : true,useUnifiedTopology: true, useUnifiedTopology: true})
.then(() => console.log('MongoDb Connected...'))
.catch(err => console.log(err));

// const itemsRouter = require ('./routers/api/items');
const userRouter = require ('./routers/api/users');

// //Use Routes
// app.use('/api/items', itemsRouter);
app.use('/api/users', userRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log('Server started on port ${port}'));

