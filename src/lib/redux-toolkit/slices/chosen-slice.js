import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    isChosen: false,
    productId: [],
};
const ChosenSlice = createSlice({
    name: 'studentStatus',
    initialState,
    reducers: {
        setIsChosen: (state, action) => {
            state.isChosen = action.payload;
        },
        setProductChosen: (state, action) => {
            state.productId = action.payload;
        },
    },
});
export const { setIsChosen, setProductChosen } = ChosenSlice.actions;
export default ChosenSlice.reducer;
