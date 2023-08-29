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
        setVerified: (state) => {
            state.value.verified = true;
        },
    },
});

export const { setUser, logout, setVerified} = tokenSlice.actions;

export default tokenSlice.reducer;