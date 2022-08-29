import React from 'react';
import Books from './Books';
import homeStyle from '../css/Home.module.css';

const Home = () => (
  <div className={homeStyle.container}>
    <div className="inner">
      <Books />
    </div>
  </div>
);

export default Home;
