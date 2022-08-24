import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Books from './components/Books ';
import AddBook from './components/AddBook ';
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
          element={(
            <>
              <div>
                <Books />
                <AddBook />
              </div>
            </>
        )}
        />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </div>
  </Router>
);

export default App;
