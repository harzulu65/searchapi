const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const router = express.Router();
const Book = require("./models/book");
require('dotenv').config();

app.use(cors());

//use express json to parse the data coming from the back end
app.use(express.json());

const db = process.env.mongoURI;

// connect to mongoose
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
//   useFindAndModify: false
}).then(() => console.log("MongoDB successfully connected"))
.catch(err => console.log(err + "Error while connecting to mongo !!!!"));

// require route
app.use("/", router);

app.post("/create", (req, res) => {
    console.log(req.body);
    Book.create(req.body)
    .then(dbCreateBook => {
      console.log(dbCreateBook);
      res.json(dbCreateBook);
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    });
  });

  app.get('/all', function(req, res){
    console.log('in the server');
    Book.find()
      .exec()
      .then(doc => {
        res.send(doc)
      })
      .catch()
  })

// const port = process.env.PORT || 8000
const port = 8100
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});