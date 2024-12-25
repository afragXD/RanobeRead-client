import { createAsyncThunk } from '@reduxjs/toolkit';
import { Ranobe } from '../../types/ranobe';
import { getRanobes } from '../../api/ranobes';
import { AxiosError } from 'axios';

export const fetchRanobes = createAsyncThunk<Ranobe[], string, { rejectValue: string }>(
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
