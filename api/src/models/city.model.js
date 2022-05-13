const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const citySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    firstLandmark: {
      type: String,
      required: false
    },
    secondLandmark: {
      type: String,
      required: false
    },
    thirdLandmark: {
      type: String,
      required: false
    },
    capital: {
      type: Boolean,
      required: false
    },
    country: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Country',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
citySchema.plugin(toJSON);

/**
 * @typedef City
 */
const City = mongoose.model('City', citySchema);

module.exports = City;
