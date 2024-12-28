import { combineReducers } from 'redux';
import { store } from '../store';
import topRanobes from './TopRanobesSlice';

export const rootReducer = combineReducers({
  topRanobes,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
