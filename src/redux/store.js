import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import autoLoginMiddleware from './middleware/autoLoginMiddleware';
import { LoggerMiddleware } from './middleware/LoggerMiddleware';
import thunk from 'redux-thunk';

import AuthReduser from './reducers';

const middleware = [thunk, autoLoginMiddleware, LoggerMiddleware, logger];

const rootStore = createStore(AuthReduser, applyMiddleware(...middleware));

export default rootStore;
