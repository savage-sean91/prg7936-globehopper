const express = require('express');
const countryController = require('../../controllers/country.controller');

const router = express.Router();

router
  .route('/')
  .post(countryController.createCountry)
  .get(countryController.getAllCountries);

router
  .route('/:countryId')
  .patch(countryController.updateCountry)
  .delete(countryController.deleteCountry);

module.exports = router;