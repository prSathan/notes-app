import { combineReducers, createStore } from 'redux';
import notesApp from './reducers/';

const reducers = combineReducers({
  notesApp,
});

export default createStore(reducers);
