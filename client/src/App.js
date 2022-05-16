import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {
  Provider
} from 'react-redux';
import {
  createStore
} from 'redux';
import reducer from './app/reducers';
import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import {ThemeProvider, createTheme} from '@mui/material/styles';
=======
import { Box, Container } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import LoginPage from './pages/login/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './components/Layout';
import CountryDetailModal from "./components/CountryDetailModal";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5ffa71"
    }
  }
});

const reduxStore = createStore(reducer);
>>>>>>> upstream/master

function App() {
  const [testData, setTestData] = useState(null);

  /*useEffect(() => {
    fetch("/v1/test")
      .then((res) => res.json())
      .then((data) => setTestData(data.message));
  }, []);*/

  // Renders top level components
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = function () {
    setDrawerOpen(true);
  }

  return (
<<<<<<< HEAD
    <ThemeProvider>
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {testData ? (
          <pre>{testData}</pre>
        ) : null}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      </div>
=======
    <ThemeProvider theme={theme}>
      <Provider store={reduxStore}>
        <Box
          className="App App-container"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box>
            <BrowserRouter>
              <Header
                title="Globe Hopper"
                openDrawer={openDrawer}
              />
              <Container>
                
                  {/* App level router */}
                  {/* <Routes>
                    <Route path="/" element={<Layout />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="countries" >
                      <Route index element={<AllCountries />} />
                      <Route path=":countryId" element={<CountryDetailModal />} />
                    </Route>
                  </Routes> */}
                  <Layout />
              </Container>
            </BrowserRouter>
          </Box>
          <Footer />
        </Box>
      </Provider>
>>>>>>> upstream/master
    </ThemeProvider>
  );
}

export default App;
