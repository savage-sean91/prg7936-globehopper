import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Alert,
  Box,
  Button,
  Snackbar,
  TextField,
  Typography,
  Radio,
  Card,
  CardContent,
  Grid,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";

function CreateCountryForm(props) {
  const [country, setCountry] = useState("");
  const [population, setPopulation] = useState();
  const [continent, setContinent] = useState();
  const [imageUrl, setImageUrl] = useState();

  const testData = {
    name: "test",
    population: 1234,
    continent: "some continent",
    imageUrl: "",
  };

  function addCountry(e) {
    e.preventDefault();
    /*  console.log(country);
    console.log(population);
    console.log(continent);

    const postData = {
      country,
      population,
      continent,
      imageUrl,
    };

    axios
      .post("http://localhost:3001/v1/countries/", postData)
      .then((response) => {
        console.log(response);
      });
      */
    fetch("http://localhost:3001/v1/countries/", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(testData),
    });
  }

  return (
    <div className="country-card">
      <Typography gutterBottom variant="h2">
        Add a Country Here:
      </Typography>
      <Typography
        gutterBottom
        color="textSecondary"
        variant="body2"
        component="p"
      >
        Please fill out details of a country
      </Typography>
      <Card style={{ maxWidth: 900, margin: "0 auto", padding: "20px 5px" }}>
        <CardContent>
          <form>
            <Grid container spacing={2}>
              <Grid xs={12} sm={12} item>
                <TextField
                  label="Country Name"
                  placeholder="Enter name here..."
                  variant="outlined"
                  fullWidth
                  required
                  type="text"
                  value={country}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid xs={12} sm={12} item>
                <TextField
                  label="Population"
                  placeholder="Enter Country Population"
                  variant="outlined"
                  type="number"
                  fullWidth
                  value={population}
                />
              </Grid>
            </Grid>
            {/* <Grid container spacing={2}>
            <Grid xs={12} sm={12} item>
              <TextField
                label="Continent"
                placeholder="Enter Continet"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid> */}
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Continent</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                //value={continent}
                label="Continent"
                //onChange={handleChange}
              >
                <MenuItem value={1}>North America</MenuItem>
                <MenuItem value={2}>South America</MenuItem>
                <MenuItem value={3}>Europe</MenuItem>
                <MenuItem value={4}>Asia</MenuItem>
                <MenuItem value={5}>Africa</MenuItem>
                <MenuItem value={6}>Australia/Oceania</MenuItem>
                <MenuItem value={7}>Antarctica</MenuItem>
                <MenuItem value={8}></MenuItem>
              </Select>
            </FormControl>
            <Grid container spacing={2}>
              <Grid xs={12} sm={12} item>
                <TextField
                  label="Image upload"
                  placeholder="Include Image URL"
                  variant="outlined"
                  fullWidth
                  value={imageUrl}
                />
              </Grid>
            </Grid>
          </form>
        </CardContent>
        <Button
          variant="contained"
          color="warning"
          fullWidth
          type="submit"
          onClick={addCountry}
        >
          Add Country
        </Button>
      </Card>
    </div>
  );
}

export default CreateCountryForm;
