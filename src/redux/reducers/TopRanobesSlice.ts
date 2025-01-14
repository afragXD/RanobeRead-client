import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RanobeTop } from '../../types/ranobe';
import { fetchTopRanobes } from '../middleware/TopRanobesThunk';

export interface GetRanobesState {
  ranobes: RanobeTop[];
  isLoading: boolean;
  error: string | null;
}

const initialState: GetRanobesState = {
  ranobes: [],
  isLoading: false,
  error: null,
};

export const getRanobesSlice = createSlice({
  name: 'ranobes/top',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopRanobes.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTopRanobes.fulfilled, (state, action: PayloadAction<RanobeTop[]>) => {
        state.isLoading = false;
        state.ranobes = action.payload;
      })
      .addCase(fetchTopRanobes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message || 'Error';
      });
  },
});

export default getRanobesSlice.reducer;
