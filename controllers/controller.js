const db = require("../models");
const axios = require('axios');

// Example search using Marketcheck API
// GET 'http://api.marketcheck.com/v1/search?api_key={{api_key}}&year=2014&make=ford&latitude=34.05&longitude=-118.24&radius=100&car_type=used&start=0&rows=2&seller_type=dealer' 
// API Key: QSbmSOpWByXGw6PBBUy4wa7HS7EpN8EQ

// Defining methods for the booksController
module.exports = {
    searchApi: function(req, res) {
      axios.get("https://www.googleapis.com/books/v1/volumes?q=flowers")
      .then((response) => res.json(response.data))
      .catch(err => res.status(422).json(err))
    },
    findAll: function(req, res) {
      db.Book
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
      db.Book
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    save: function(req, res) {
      db.Book
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
      db.Book
        .findByIdAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
      db.Book
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
  };
