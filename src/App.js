import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DisplayBooks from './components/DisplayBooks ';
import AddBookForm from './components/AddBookForm';
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
                <DisplayBooks />
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
