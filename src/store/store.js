import { createStore, combineReducers } from 'redux';

import { ExcercisesReducer } from './reducers/excercises.reducer';

const rootReducer = combineReducers({
  excercises: ExcercisesReducer,
});

export default createStore(rootReducer);
