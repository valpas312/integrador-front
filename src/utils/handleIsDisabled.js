// Objetivo: validar si el turno está cancelado, confirmado, pendiente a confirmar o si ya pasó la fecha y hora del turno
export const isDisabled = (fechayhora, estado) => {
    if (estado === "Cancelado") {
        return true;
    } else if (estado === "Confirmado") {
        return true;
    } else if (estado === "Pendiente a confirmar") {
        return false;
    } else if (fechayhora < new Date().toISOString()) {
        return true;
    } else {
        return false;
    }
        
};