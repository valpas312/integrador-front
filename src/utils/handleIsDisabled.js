import { dateFormatter } from "./dateFormatter";

export const isDisabled = (fechayhora, estado) => {
    if(fechayhora < dateFormatter(new Date()) || estado === "Confirmado" || estado === "Cancelado"){
        return true
    }
};