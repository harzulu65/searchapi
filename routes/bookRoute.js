const express = require('express');
const router = express.Router();
const Book = require("../models/book.js");

//

// router.route("/api/create").post((req, res)=> {

//     console.log("i'm in the route", req.body.title);
//     const title = req.body.title;
//     const path = req.body.path;
//     const newBook = new Book({
//         title,
//         path
//     });

//     // newBook.save();
// })

module.export = router;