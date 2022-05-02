const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

let sampleCountries = [
  {
      Name: "United States",
      Population: 328200000,
      Continent: 'North America',
      CountryId: 1,
  },
  {
    Name: "Canada",
    Population: 28000000,
    Continent: 'North America',
    CountryId: 2,
  },
  {
    Name: "Mexico",
    Population: 20000000,
    Continent: 'North America',
    CountryId: 3,
  },
  {
    Name: "Brazil",
    Population: 23413242,
    Continent: 'South America',
    CountryId: 4,
  },
  {
    Name: "England",
    Population: 52002200,
    Continent: 'Europe',
    CountryId: 5,
  },
  {
    Name: "Ireland",
    Population: 12412470,
    Continent: 'Europe',
    CountryId: 6,
  },
  {
    Name: "Spain",
    Population: 11028902,
    Continent: 'Europe',
    CountryId: 7,
  },
];

let sampleCities = [
  {
    Name: "District of Columbia",
    Capital: true,
    FirstLandmark: 'Washington Monument',
    SecondLandmark: 'Lincoln Memorial',
    ThirdLandmark: 'White House',
    CountryId: 1
  },
  {
      Name: "New York City",
      Capital: false,
      FirstLandmark: 'Chrysler Building',
      SecondLandmark: 'Statue of Liberty',
      ThirdLandmark: 'Broadway',
      CountryId: 1
  }
];

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });

  router.use('/test', (req, res) => {
    res.send({ message: "hello world!" });
  });

  router.use('/sample', (req, res) => {
    res.json([]);
  });

  router.use('/countries', (req, res) => {
    res.json(sampleCountries);
  });

  router.use('/cities', (req, res) => {
    res.json(sampleCities);
  });
}

module.exports = router;
