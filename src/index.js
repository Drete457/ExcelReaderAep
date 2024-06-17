import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import LoadingScreen from './Components/loading';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') || document.createElement('div'),
);

root.render(
  <Suspense fallback={LoadingScreen}>
    <App />
  </Suspense>,
);
