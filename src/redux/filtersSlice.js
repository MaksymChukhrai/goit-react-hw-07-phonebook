import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: {
      reducer(state, action) {
        return (state = action.payload);
      },
      prepare(value) {
        return {
          type: 'filters/setValueFilter',
          payload: value,
        };
      },
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const { setFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
