import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer/rootReducer';

export default function configureStore() {
  return createStore(rootReducer, applyMiddleware(thunk));
}
