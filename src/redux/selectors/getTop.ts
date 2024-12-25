import { RootState } from '../reducers/rootReducer';

export const selectTopRanobesError = (state: RootState) => state.topRanobes.error;

export const selectTopRanobesLoading = (state: RootState) => state.topRanobes.isLoading;

export const selectTopRanobesData = (state: RootState) => state.topRanobes.ranobes;
