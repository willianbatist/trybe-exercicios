// src/context/Provider.js
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {
  const [cars, setCars] = useState({ red: false, blue: false, yellow: false });

    const addCorCars = (carsCor, bollean) => {
      const objCor = {
        ...cars,
        [carsCor]: bollean,
      }
      setCars(objCor)
    };

    return (
      <CarsContext.Provider value={{ cars, addCorCars }}>
        {children}
      </CarsContext.Provider>
    );
  };

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
