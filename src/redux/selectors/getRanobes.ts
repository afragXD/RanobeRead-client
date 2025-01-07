import { RootState } from '../reducers/rootReducer';

export const selectRanobesError = (state: RootState) => state.listRanobes.error;

export const selectRanobesLoading = (state: RootState) => state.listRanobes.isLoading;

export const selectRanobesData = (state: RootState) => state.listRanobes.ranobes;
