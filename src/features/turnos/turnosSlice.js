import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  turnos: [],
  historialDeTurnos: [],
  turnosPendientesAConfirmar: [],
  turnosConfirmados: [],
  turnosCancelados: [],
  turnosAMostrar: [],
};
const turnosSlice = createSlice({
  name: "turnos",
  initialState,
  reducers: {
    setTurnos(state, action) {
      state.turnos = action.payload;
      state.turnosAMostrar = action.payload;
      state.historialDeTurnos = action.payload.filter(
        (turno) =>
          turno.fechayhora < new Date().toISOString() ||
          turno.estado == "Confirmado"
      );
      state.turnosCancelados = action.payload.filter(
        (turno) =>
          turno.estado === "Cancelado" ||
          (turno.fechayhora < new Date().toISOString() &&
            (turno.estado == "Confirmado") |
              (turno.estado == "Pendiente a confirmar"))
      );
      state.turnosCancelados = state.turnosCancelados.map((turno) => {
        turno.estado = "Cancelado";
        return turno;
      });
      state.turnosConfirmados = action.payload.filter(
        (turno) => turno.estado === "Confirmado"
      );
      state.turnosPendientesAConfirmar = action.payload.filter(
        (turno) => turno.estado === "Pendiente a confirmar"
      );
    },
    confirmarTurno(state, action) {
      const turnoAConfirmar = state.turnos.find(
        (turno) => turno._id === action.payload
      );
      turnoAConfirmar.estado = "Confirmado";
    },
    logoutT(state) {
      state.turnos = [];
      state.historialDeTurnos = [];
      state.turnosPendientesAConfirmar = [];
      state.turnosConfirmados = [];
      state.turnosCancelados = [];
    },
    eliminarTurno(state, action) {
      const turnoAEliminar = state.turnos.find(
        (turno) => turno._id === action.payload
      );
      state.turnos = state.turnos.filter(
        (turno) => turno._id !== turnoAEliminar._id
      );
    },
    turnosAMostrar(state, action) {
      state.turnosAMostrar = action.payload;
    },
  },
});

export const {
  setTurnos,
  confirmarTurno,
  logoutT,
  eliminarTurno,
  turnosAMostrar,
} = turnosSlice.actions;

export default turnosSlice.reducer;
