import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Ranobe } from '../../types/ranobe';
import { fetchRanobes } from '../middleware/ListRanobesThunk';

export interface GetRanobesState {
  ranobes: Ranobe[];
  isLoading: boolean;
  error: string | null;
}

const initialState: GetRanobesState = {
  ranobes: [],
  isLoading: false,
  error: null,
};

export const getRanobesSlice = createSlice({
  name: 'ranobes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRanobes.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchRanobes.fulfilled, (state, action: PayloadAction<Ranobe[]>) => {
        state.isLoading = false;
        state.ranobes = action.payload;
      })
      .addCase(fetchRanobes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message || 'Error';
      });
  },
});

export default getRanobesSlice.reducer;
