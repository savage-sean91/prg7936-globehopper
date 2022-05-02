import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import LoginPage from './pages/login/Login';
import Home from './pages/home/Home';
import Header from './components/Header';
import Footer from './components/Footer';

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
        {/* <header className="App-header">
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
        </header> */}
        {/* <LoginPage /> */}
        <Header
          title="Globe Hopper"
          openDrawer={openDrawer}
        />
        <Home />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
