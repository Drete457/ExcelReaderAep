import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import LoadingScreen from './Components/loading';
import App from './App';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Root element not found in document.');
}

const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <Suspense fallback={<LoadingScreen />}>
      <App />
    </Suspense>
  </StrictMode>,
);
