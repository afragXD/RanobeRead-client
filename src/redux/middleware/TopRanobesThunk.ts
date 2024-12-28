import { createAsyncThunk } from '@reduxjs/toolkit';
import { RanobeTop } from '../../types/ranobe';
import { getRanobes } from '../../api/ranobes';
import { AxiosError } from 'axios';

export const fetchRanobes = createAsyncThunk<RanobeTop[], string, { rejectValue: string }>(
  'ranobes/fetchTopRanobes',
  async (url, { rejectWithValue }) => {
    try {
      const response = await getRanobes(url);
      return response.data;
    } catch (error) {
      return rejectWithValue((error as AxiosError).message);
    }
  },
);
