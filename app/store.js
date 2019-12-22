import { createStore, applyMiddleware, compose} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import _throttle from 'lodash.throttle';
import rootReducer from './reducers';
import { saveQueueState, loadQueueState, loadUserData } from './localStorage';

let middleware = [thunk];
// apply logger middleware in the development environment

if (process.env.NODE_ENV !== 'production') {
  const logger = require('./logger').default;

  middleware = [...middleware/* , logger */];
}

const queueFromLocalStorage = loadQueueState();
const persistedData = {
  queueState: queueFromLocalStorage,
  auth: {
    authenticated: Boolean(loadUserData()),
    user: loadUserData(),
    errors: {},
  },
};

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  persistedData,
  composeWithDevTools(applyMiddleware(...middleware)
  ))


store.subscribe(_throttle(() => {
  saveQueueState(store.getState());
}, 1000 * 60 * 5));
// save songs in queue to the localStorage every 1 minutes

export default store;
