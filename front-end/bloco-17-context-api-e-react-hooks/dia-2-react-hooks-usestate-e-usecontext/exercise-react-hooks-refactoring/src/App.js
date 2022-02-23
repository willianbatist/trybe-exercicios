// src/App.js

import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Cars from './Cars';

function App() {
  return (
    <Provider>
      <Cars />
    </Provider>
  );
}

export default App;
