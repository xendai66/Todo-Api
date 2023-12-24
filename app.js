const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 5000;

mongoose.connect('mongodb://localhost:27017/todo_express', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('MongoDB connection error:', error);
});



//middlewares 
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine","ejs");

//routes
app.use(require("./routes/index"))
app.use(require("./routes/todo"))

//server configuration
app.listen(port, () => { console.log(`Server started `)});
