import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {}
};

const tokenSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.value = action.payload;
        },
        logout: (state) => {
            state.value = {};
        },
    },
});

export const { setUser, logout} = tokenSlice.actions;

export default tokenSlice.reducer;