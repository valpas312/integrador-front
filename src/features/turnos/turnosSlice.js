import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    turnos: [],
};

const turnosSlice = createSlice({
    name: "turnos",
    initialState,
    reducers: {
        setTurnos(state, action) {
            state.turnos = action.payload;
        },
    },
});

export const { setTurnos } = turnosSlice.actions;

export default turnosSlice.reducer;