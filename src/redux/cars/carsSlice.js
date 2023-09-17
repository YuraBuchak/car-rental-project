import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCarsThunk } from './carsOperation';

const initialState = {
  carsAll: [],
  error: null,
};

export const carsSlice = createSlice({
  name: 'catalog',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAllCarsThunk.fulfilled, (state, { payload }) => {
        state.carsAll = payload;
        state.error = null;
      })
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, { payload }) => {
          state.error = payload;
        }
      );
  },
});

export default carsSlice.reducer;
