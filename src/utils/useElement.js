//custom hook para mostrar un componente u otro dependiendo de si el usuario está logueado o no
import { useSelector } from "react-redux";

export const useElement = (componente, login) => {
    const user = useSelector((state) => state.user.value);
    const token = useSelector((state) => state.token.value);
    
    if (user?.dni && token) {
        return componente;
    } else {
        return login;
    }
}