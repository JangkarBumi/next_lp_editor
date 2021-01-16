import { Button } from '@material-ui/core';
import React from 'react';
import Header from './Header';

const Lasles = () => {
  return (
    <div>
      <Header />

      <div className="hero">
        <div>
          <h1>Find your next SaaS ideas</h1>
          <p>
            Learn from successful products, deep dive into their journey,
            tactics and strategies.
          </p>
          <Button variant="contained" color="primary">
            Primary
          </Button>
        </div>

        <img
          className="hero-img"
          src="https://saastome.com/static/media/Ilustration.e7a58ef5.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Lasles;
