import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import LoginPage from './pages/login/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './components/Layout';
import CountryDetailModal from "./components/CountryDetailModal";

const theme = createTheme();

function App() {
  const [testData, setTestData] = useState(null);

  useEffect(() => {
    fetch("/v1/test")
      .then((res) => res.json())
      .then((data) => setTestData(data.message));
  }, []);

  // Renders top level components
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = function () {
    setDrawerOpen(true);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App App-container">
        <Header
          title="Globe Hopper"
          openDrawer={openDrawer}
        />
        <BrowserRouter>
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
        </BrowserRouter>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
