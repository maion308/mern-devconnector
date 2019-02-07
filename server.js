const express = require("express");
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');


const app = express();

//db config
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose
	.connect(db)
	.then(() => console.log('MongoDb connected'))
	.catch(err => console.log(err));

app.get("/", (req, res) => res.send("hello!"));

//Use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000; //process.env.PORT is when deploying on heroku or somewhere else

// the backticks `` are es6 template literals so we can put a variable
app.listen(port, () => console.log(`Server running on port ${port}`)); //${} is the variable syntax
