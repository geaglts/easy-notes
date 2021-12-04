import React from 'react';
import { render } from 'react-dom';
import 'styles/index.scss';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import reducers from './redux/reducers';
import Context from 'context';

import App from 'routes/App';

const store = createStore(reducers, applyMiddleware(reduxThunk));

render(
  <Context.Provider>
    <Provider store={store}>
      <App />
    </Provider>
  </Context.Provider>,
  document.getElementById('app')
);
