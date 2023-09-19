import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCarsThunk, fetchCarsPaginationThunk } from './carsOperation';

const initialState = {
  carsAll: [],
  cars: [],
  isLoading: false,
  error: null,
};

export const carsSlice = createSlice({
  name: 'catalog',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCarsPaginationThunk.pending, (state, { payload }) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(fetchCarsPaginationThunk.fulfilled, (state, { payload }) => {
        state.cars = payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(fetchAllCarsThunk.fulfilled, (state, { payload }) => {
        state.carsAll = payload;
        state.error = null;
        state.isLoading = false;
      })
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, { payload }) => {
          state.error = payload;
          state.isLoading = false;
        }
      );
  },
});

export default carsSlice.reducer;
