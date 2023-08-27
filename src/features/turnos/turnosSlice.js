import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    turnos: [],
    historialDeTurnos: [],
    turnosPendientesAConfirmar: [],
    turnosConfirmados: [],
    turnosCancelados: [],
}
const turnosSlice = createSlice({
    name: "turnos",
    initialState,
    reducers: {
        setTurnos(state, action) {
            state.turnos = action.payload;
            state.historialDeTurnos = action.payload.filter((turno) => turno.fechayhora < Date.now());
            state.turnosPendientesAConfirmar = action.payload.filter((turno) => turno.estado === "Pendiente a confirmar");
            state.turnosConfirmados = action.payload.filter((turno) => turno.estado === "Confirmado");
            state.turnosCancelados = action.payload.filter((turno) => turno.estado === "Cancelado");
        }
    },
});

export const { setTurnos } = turnosSlice.actions;

export default turnosSlice.reducer;