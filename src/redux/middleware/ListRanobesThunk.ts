import { createAsyncThunk } from '@reduxjs/toolkit';
import { Ranobe } from '../../types/ranobe';
import { getRanobes } from '../../api/ranobes';
import { AxiosError } from 'axios';

export const fetchRanobes = createAsyncThunk<Ranobe[], void, { rejectValue: string }>(
  'ranobes/fetchRanobes',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getRanobes();
      return response.data;
    } catch (error) {
      return rejectWithValue((error as AxiosError).message);
    }
  },
);
