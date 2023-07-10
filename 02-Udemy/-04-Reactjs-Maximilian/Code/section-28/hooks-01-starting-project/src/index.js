import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import AuthContextProvidor from './components/context/auth-context';

ReactDOM.render(<AuthContextProvidor >
  <App /></AuthContextProvidor>, document.getElementById('root'));
