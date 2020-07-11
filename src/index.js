import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './_helpers';
import {App} from './App.jsx';

// setup fake backend
import { configureFakeBackend } from './_helpers';
configureFakeBackend();

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
