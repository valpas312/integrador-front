import { useSelector } from "react-redux";

export const useElement = (componente, login) => {
    const user = useSelector((state) => state.user.value);
    
    if (user?.dni) {
        return componente;
    } else {
        return login;
    }
}