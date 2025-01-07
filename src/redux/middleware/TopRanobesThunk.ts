import { createAsyncThunk } from '@reduxjs/toolkit';
import { RanobeTop } from '../../types/ranobe';
import { getTopRanobes } from '../../api/ranobes';
import { AxiosError } from 'axios';

export const fetchTopRanobes = createAsyncThunk<RanobeTop[], void, { rejectValue: string }>(
  'ranobes/fetchTopRanobes',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getTopRanobes();
      return response.data;
    } catch (error) {
      return rejectWithValue((error as AxiosError).message);
    }
  },
);
