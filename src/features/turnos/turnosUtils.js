export const historialDeTurnos = (turnos) => {
    const {turno} = turnos;

    const historialDeTurnos = turno.filter((turno) => turno.fechayhora < Date.now());

    return [...historialDeTurnos]
};

export const turnosPendientesAConfirmar = (turnos) => {
    if (turnos.estado === "Pendiente a confirmar"){
        return [...turnos]
    } else {
        return []
    }
};

export const turnosConfirmados = (turnos) => {
    if (turnos.estado === "Confirmado"){
        return [...turnos]
    } else {
        return []
    }
};

export const turnosCancelados = (turnos) => {
    if (turnos.estado === "Cancelado"){
        return [...turnos]
    } else {
        return []
    }
};