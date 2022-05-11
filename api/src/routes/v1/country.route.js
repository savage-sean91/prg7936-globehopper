const express = require('express');
const userController = require('../../controllers/user.controller');

const router = express.Router();

router
  .route('/')
  .get(function (req, res, next) {
    // Get all the countries from the database
  });

router
  .route('/:countryId')
  .get(function (req, res, next) {
    // Get a specific country from the database
  });

module.exports = router;