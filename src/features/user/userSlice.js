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
    },
});

export const { setUser } = tokenSlice.actions;

export default tokenSlice.reducer;