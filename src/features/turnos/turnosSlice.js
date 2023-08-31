import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    turnos: [],
    historialDeTurnos: [],
    turnosPendientesAConfirmar: [],
    turnosConfirmados: [],
    turnosCancelados: []
}
const turnosSlice = createSlice({
    name: "turnos",
    initialState,
    reducers: {
        setTurnos(state, action) {
            state.turnos = action.payload;
            state.historialDeTurnos = action.payload.filter((turno) => turno.fechayhora < new Date().toISOString() && turno.estado == "Confirmado");
            state.turnosPendientesAConfirmar = action.payload.filter((turno) => turno.estado === "Pendiente a confirmar");
            state.turnosConfirmados = action.payload.filter((turno) => turno.estado === "Confirmado");
            state.turnosCancelados = action.payload.filter((turno) => turno.estado === "Cancelado" || turno.fechayhora < new Date().toISOString() && turno.estado == "Confirmado" );
            state.turnosCancelados = state.turnosCancelados.map((turno) => {
                turno.estado = "Cancelado";
                return turno;
            });
        },
        confirmarTurno(state, action) {
            const turnoAConfirmar = state.turnos.find((turno) => turno._id === action.payload);
            turnoAConfirmar.estado = "Confirmado";
        },
    },
});

export const { setTurnos, confirmarTurno } = turnosSlice.actions;

export default turnosSlice.reducer;