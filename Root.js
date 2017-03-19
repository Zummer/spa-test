import React from 'react'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers'
import App from './components/App'

const middleware = applyMiddleware(thunk, logger());
const store = createStore(rootReducer, middleware);

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
