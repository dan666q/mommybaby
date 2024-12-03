import { createSlice } from '@reduxjs/toolkit';
const initialState = { pageSize: 20, pageNumber: 1 };
const PaginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setPagination: (state, action) => {
            state.pageSize = action.payload.pageSize;
            state.pageNumber = action.payload.pageNumber;
        },
    },
});
export const { setPagination } = PaginationSlice.actions;
export default PaginationSlice.reducer;
