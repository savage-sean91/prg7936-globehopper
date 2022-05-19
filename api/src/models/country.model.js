const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const countrySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    population: {
      type: Number,
      required: false,
    },
    continent: {
      type: String,
      required: false,
    },
    imageUrl: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
countrySchema.plugin(toJSON);

/**
 * Check if country name already exists
 * @param {string} countryName - The user's email
 * @returns {Promise<boolean>}
 */
countrySchema.statics.doesCountryExist = async function (countryName) {
  const existingCountry = await this.findOne({ name: countryName });
  return !!existingCountry;
};

/**
 * @typedef Country
 */
const Country = mongoose.model('Country', countrySchema);

module.exports = Country;
