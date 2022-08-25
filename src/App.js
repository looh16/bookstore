import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddBookForm from './components/AddBookForm';
import Books from './components/Books';
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
                <AddBookForm />
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
