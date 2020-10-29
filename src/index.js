import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import LoadingScreen from './Components/loading';
import App from './App';

ReactDOM.render(
  <Suspense fallback={LoadingScreen}>
    <App />
  </Suspense>,
  document.getElementById('root'),
);
