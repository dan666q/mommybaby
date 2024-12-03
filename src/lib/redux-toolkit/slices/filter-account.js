import { createSlice } from '@reduxjs/toolkit';
const initialState = { value: '', filter: [] };
const filterSliceAccount = createSlice({
    name: 'filterStudentsClass',
    initialState,
    reducers: {
        setFilterAccount: (state, action) => {
            const { key, value } = action.payload;
            state[key] = value;
        },
        setSearchAccount: (state, action) => {
            state.value = action.payload;
        },
    },
});
export const { setFilterAccount, setSearchAccount } = filterSliceAccount.actions;
export default filterSliceAccount.reducer;
