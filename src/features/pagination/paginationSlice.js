import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
  elementsPerPage: 1,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setElementsPerPage: (state, action) => {
      state.elementsPerPage = action.payload;
    },
    resetCurrentPage: (state) => {
      state.currentPage = 1;
    },
  },
});

export const { setCurrentPage, setElementsPerPage, resetCurrentPage } =
  paginationSlice.actions;
export default paginationSlice.reducer;
