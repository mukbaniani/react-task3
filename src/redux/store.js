import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { LoggerMiddleware } from './middleware/LoggerMiddleware';

import AuthReduser from './reducers';

const middleware = [LoggerMiddleware, logger];

const rootStore = createStore(AuthReduser, applyMiddleware(...middleware));

export default rootStore;
