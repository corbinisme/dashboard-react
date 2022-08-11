import React, { Component } from 'react';
import { HashRouter, BrowserRouter, Routes, Link, Route } from 'react-router-dom';
import './App.css';
import Layout from "./Components/Layout";
import NoPage from "./Components/NoPage";
import Happy from "./Pages/Happy";
import Educational from "./Pages/Educational";
import Entertainment from "./Pages/Entertainment";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Happy />} />
            <Route path="*" element={<NoPage />} />
            <Route path="educational" element={<Educational />} />
            <Route path="entertainment" element={<Entertainment />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
