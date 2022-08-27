import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Categories from './components/Categories';

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home />
          }
        />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </div>
  </Router>
);

export default App;
