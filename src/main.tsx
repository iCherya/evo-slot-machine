import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from '@/components/App';
import { StoreProvider } from '@/store';

import './styles/styles.scss';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <StoreProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    ,
  </StoreProvider>,
);
