export const dateFormatter = (date) => {
    const fecha = new Date(date);
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const año = fecha.getFullYear();
    const hora = fecha.getHours();
    const minutos = fecha.getMinutes();
    return `${dia}/${mes}/${año} ${hora}:${minutos}`;
};