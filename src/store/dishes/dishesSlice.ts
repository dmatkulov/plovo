import {Dish} from '../../types';
import {createSlice} from '@reduxjs/toolkit';
import {deleteDish, fetchDishes} from './dishesThunks';
import {RootState} from '../../app/store';

interface DishState {
  dishes: Dish[];
  fetchLoading: boolean;
  deleteLoading: false | string;
}

const initialState: DishState = {
  dishes: [],
  fetchLoading: false,
  deleteLoading: false
};

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchDishes.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchDishes.fulfilled, (state, {payload: items}) => {
      state.fetchLoading = false;
      state.dishes = items;
    });
    builder.addCase(fetchDishes.rejected, (state) => {
      state.fetchLoading = false;
    });
    builder.addCase(deleteDish.pending, (state, {meta}) => {
      state.deleteLoading = meta.arg;
    });
    builder.addCase(deleteDish.fulfilled, (state) => {
      state.deleteLoading = false;
    });
    builder.addCase(deleteDish.rejected, (state) => {
      state.deleteLoading = false;
    });
  }
});

export const dishesReducer = dishesSlice.reducer;
export const selectDishes = (state: RootState) => state.dishes.dishes;
export const selectFetchDishLoading = (state: RootState) => state.dishes.fetchLoading;
export const selectDeleteDishLoading = (state: RootState) => state.dishes.deleteLoading;