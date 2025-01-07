import { createAsyncThunk } from '@reduxjs/toolkit';
import { RanobeTop } from '../../types/ranobe';
import { getRanobes } from '../../api/ranobes';
import { AxiosError } from 'axios';

export const fetchRanobes = createAsyncThunk<RanobeTop[], void, { rejectValue: string }>(
  'ranobes/fetchTopRanobes',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getRanobes();
      return response.data;
    } catch (error) {
      return rejectWithValue((error as AxiosError).message);
    }
  },
);
