import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'; // You can use Redux Thunk for handling asynchronous actions if needed.
import chatbotReducer from './Reducer';

const rootReducer = combineReducers({
  chatbot: chatbotReducer, // You can combine multiple reducers if your app grows.
});

const middlewares = [thunk]; // You can add more middleware as needed.

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

export default store;
