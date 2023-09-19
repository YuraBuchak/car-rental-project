import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllCars, fetchCarsPage } from 'Api/api';

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

export const fetchCarsPaginationThunk = createAsyncThunk(
  'catalog/fetchCarsPagination',
  async (page, thunkAPI) => {
    try {
      const data = await fetchCarsPage(page);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
