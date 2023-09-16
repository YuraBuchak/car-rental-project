import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllCars } from 'Api/api';

export const fetchAllCarsThunk = createAsyncThunk(
  'catalog/fetchAllCars',
  async (_, thunkAPI) => {
    try {
      const data = await fetchAllCars();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
