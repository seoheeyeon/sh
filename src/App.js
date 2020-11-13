import React, { useEffect, useState, } from 'react';
import { BrowserRouter, } from 'react-router-dom';

import RootRouter from './routers/RootRouter';
import { ExchangeRateContextProvider, } from './contexts/ExchangeRateContext';

function App() {
  return (
    <ExchangeRateContextProvider>
      <BrowserRouter>
        <RootRouter />
      </BrowserRouter>
    </ExchangeRateContextProvider>
  );
}

export default App;
