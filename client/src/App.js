import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import {ThemeProvider, createTheme} from '@mui/material/styles';

function App() {
  const [testData, setTestData] = useState(null);

  useEffect(() => {
    fetch("/v1/test")
      .then((res) => res.json())
      .then((data) => setTestData(data.message));
  }, []);

  return (
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
    </ThemeProvider>
  );
}

export default App;
