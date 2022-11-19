import React, { Suspense } from 'react';
import { Flowbite } from 'flowbite-react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from './app/store';
import Loading from './components/Loading';
import App from './App';
import './index.css';
import './i18n';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Flowbite>
        <Provider store={store}>
          <Suspense fallback={<Loading />}>
            <App />
          </Suspense>
        </Provider>
      </Flowbite>
    </BrowserRouter>
  </React.StrictMode>
);