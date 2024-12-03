import { createSlice } from '@reduxjs/toolkit';
const initialState = {};
const PopupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        openPopup: (state, action) => {
            state[action.payload] = true;
        },
        closePopup: (state, action) => {
            state[action.payload] = false;
        }
    }
});
export const { openPopup, closePopup } = PopupSlice.actions;
export default PopupSlice.reducer;