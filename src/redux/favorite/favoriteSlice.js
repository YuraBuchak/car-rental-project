import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    parseToFavorites: (state, action) => {
      state.favorites = action.payload;
    },
  },
});

export const { parseToFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
