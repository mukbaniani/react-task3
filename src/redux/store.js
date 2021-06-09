import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import AuthReduser from './reducers';

const middleware = [logger];

const rootStore = createStore(AuthReduser, applyMiddleware(...middleware));

export default rootStore;
