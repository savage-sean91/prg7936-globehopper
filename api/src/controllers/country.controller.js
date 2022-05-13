const httpStatus = require('http-status');
const { Country } = require('../models');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');

const getAllCountries = async (req, res) => {
    const result = await Country.find({});
    res.send(result);
};

const createCountry = catchAsync(async (req, res) => {
    if (await Country.doesCountryExist(req.body.name)) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Country Name already taken');
    }
    const newCountry = Country.create(req.body);
    res.status(httpStatus.CREATED).send(newCountry);
});

const updateCountry = catchAsync(async (req, res) => {
    // req.params.countryId
    const country = await Country.findById(req.params.countryId);
    if (!country) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Country not found');
    }

    Object.assign(country, req.body);
    await country.save();
    
    res.send(country);
});

const deleteCountry = catchAsync(async (req, res) => {
    const country = await Country.findById(req.params.countryId);
    if (!country) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Country not found');
    }
    await country.remove();
    res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
    getAllCountries,
    createCountry,
    updateCountry,
    deleteCountry
};