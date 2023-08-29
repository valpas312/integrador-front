export const turnoVencido = (turno) => {
    return turno.fechayhora < Date.now();
};