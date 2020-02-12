import React from 'react';
import { Router } from 'react-router-dom';

// will provide the store for all components in the application
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Routes from './routes';

import history from './services/history';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        {/* all components in here have the ability to navigate */}
        <Header />
        <Routes />
        <GlobalStyle />
        {/* autoClose -> duration of the message on screen */}
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  );
}

export default App;
