import {ApiDish, Dish} from '../../types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {createDish, deleteDish, fetchDish, fetchDishes, updateDish} from './dishesThunks';
import {RootState} from '../../app/store';

interface DishState {
  dishes: Dish[];
  dish: ApiDish | null;
  fetchLoading: boolean;
  fetchOneLoading: boolean;
  createLoading: boolean;
  updateLoading: boolean;
  deleteLoading: false | string;
}

const initialState: DishState = {
  dishes: [],
  dish: null,
  fetchLoading: false,
  fetchOneLoading: false,
  createLoading: false,
  updateLoading: false,
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
    builder.addCase(createDish.pending, (state) => {
      state.createLoading = true;
    });
    builder.addCase(createDish.fulfilled, (state) => {
      state.createLoading = false;
    });
    builder.addCase(createDish.rejected, (state) => {
      state.createLoading = false;
    });
    builder.addCase(fetchDish.pending, (state) => {
      state.fetchOneLoading = true;
    });
    builder.addCase(fetchDish.fulfilled, (state, {payload: dish}: PayloadAction<ApiDish>) => {
      state.fetchOneLoading = false;
      state.dish = dish;
    });
    builder.addCase(fetchDish.rejected, (state) => {
      state.fetchOneLoading = false;
    });
    builder.addCase(updateDish.pending, (state) => {
      state.updateLoading = true;
    });
    builder.addCase(updateDish.fulfilled, (state) => {
      state.updateLoading = false;
    });
    builder.addCase(updateDish.rejected, (state) => {
      state.updateLoading = false;
    });
  }
});

export const dishesReducer = dishesSlice.reducer;
export const selectDishes = (state: RootState) => state.dishes.dishes;
export const selectUpdateDishLoading = (state: RootState) => state.dishes.updateLoading;

export const selectFetchOneDishLoading = (state: RootState) => state.dishes.fetchOneLoading;

export const selectOneDish = (state: RootState) => state.dishes.dish;
export const selectFetchDishLoading = (state: RootState) => state.dishes.fetchLoading;
export const selectDeleteDishLoading = (state: RootState) => state.dishes.deleteLoading;
export const selectCreateLoading = (state: RootState) => state.dishes.createLoading;
