const express = require('express');
const router = express.Router();
const passport = require('passport');
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';
const mongoose = require('mongoose');
const Book = require('../models/Book.js');
const account = require('../models/account.js');
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sumchita',
    pass: 'mpower@123'
  }
});

// Mongoose connection to MongoDB (ted/ted is readonly)
mongoose.Promise = global.Promise;

/* GET ALL BOOKS */
router.get('/book', function(req, res, next) {
  Book.find(function (err, products) {
    if (err) return next(err);

    console.log(products);
    res.json(products);
  });
});
// Mongoose Model definition

/* GET SINGLE BOOK BY ID */
router.get('/book/:id', function(req, res, next) {
  Book.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});



/* GET SINGLE USER DETAILS */
router.get('/userdetails/:id', function(req, res, next) {
  Book.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});





/* SAVE BOOK */
router.post('/booksave', function(req, res, next) {
  Book.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


/* REGISTER USER */
router.post('/userregister', function(req, res, next) {
  account.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET SINGLE USER  LOGIN  DETAILS */
router.post('/loginuserdetails', function(req, res, next) {
 /* Book.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });*/
console.log("username"+req.body.username);
console.log("password"+req.body.password);
  account.findOne({ username: req.body.username, password: req.body.password}, function(err, post) {
  //console.log(character); // { name: 'Frodo', inventory: { ringOfPower: 1 }}
   if (err) return next(err);

   console.log("posted data"+post);
    res.json(post);
});
});
/* UPDATE BOOK */
/*router.put('/:id', function(req, res, next) {
  Book.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE BOOK */
/*router.delete('/:id', function(req, res, next) {
  Book.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET api listing. */



router.get('/', function (req, res) {
    res.send("Show Users");
});

router.get('/users', function (req, res) {
    User.find({}, function (err, docs) {
        res.json(docs);
    });
});

router.get('/users/:email', function (req, res) {
    if (req.params.email) {
        User.find({ email: req.params.email }, function (err, docs) {
            res.json(docs);
        });
    }
});


router.get('/showmailresponse/:email', function (req, res) {
  if (req.params.email) {
   /* User.find({ email: req.params.email }, function (err, docs) {
      res.json(docs);
    });*/
    var mailOptions = {
      from: 'admin@gmail.com',
      to: req.params.email,
      subject: 'Sending Email using Node.js',
      text: 'That was easy!'
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
        res.json(error);
      } else {
        console.log('Email sent: ' + info.response);
        res.json(info.response);
      }
    });
  }
});
router.get('/satabdi', function (req, res) {
    res.send("welcome satabdi");
});





// Get all posts
router.get('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

module.exports = router;
