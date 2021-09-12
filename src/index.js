import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import UserProvider from './context/UserProvider'
import CounterReducer, { InitialState } from './reducers/CounterReducer'
import StoreProvider from './store'
ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <UserProvider state={InitialState} reducer={CounterReducer}> */}
      <StoreProvider>
        <App />
      </StoreProvider>
      {/* </UserProvider> */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
