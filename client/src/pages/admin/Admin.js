import React, { useState, useEffect } from "react";
import CreateCountryform from "../../components/forms/CreateCountryForm";

import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useMatch,
  useLocation,
} from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Box,
  Container,
  CircularProgress,
  Paper,
  Table,
  TableContainer,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import CreateCountryForm from "../../components/forms/CreateCountryForm";

const AdminPage = (props) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/v1/countries")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      });
  }, []);

  return (
    <Box>
      {loading ? (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <CircularProgress />
          <p>Importing Countries...</p>
        </Box>
      ) : (
        <Box>
          <Box>
            <Typography variant="h4">Globehopper Admin</Typography>
            <Typography variant="h5" sx={{ textAlign: "left", mt: 2, mb: 1 }}>
              Countries
            </Typography>
            <TableContainer component={Paper}>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Population</TableCell>
                    <TableCell>Continent</TableCell>
                    <TableCell>Cities</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {countries.map((c) => (
                    <TableRow key={c.id}>
                      <TableCell>{c.name}</TableCell>
                      <TableCell>{c.population}</TableCell>
                      <TableCell>{c.continent}</TableCell>
                      <TableCell>
                        {Array.isArray(c.cities) ? c.cities.length : 0}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Box>
            <CreateCountryForm />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default AdminPage;
