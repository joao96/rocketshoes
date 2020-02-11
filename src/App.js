import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Header from './components/Header';

import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      {/* all components in here have the ability to navigate */}
      <Header />
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
