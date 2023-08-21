import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import axios from "axios";
import { API_URL } from "../../utils/constantes";

const Login = () => {

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            contraseña: e.target.contraseña.value,
        };
        const response = await axios.post(
            `${API_URL}/users/login`,
            data
        );
        console.log(response);
    };

  return (
    <FormControl
        as="form"
        onSubmit={handleOnSubmit}
    >
      <FormLabel>Correo electrónico</FormLabel>
      <Input placeholder="Correo electrónico" id="email" />

      <FormLabel>Contraseña</FormLabel>
      <Input placeholder="Contraseña" id="contraseña" />

      <Button type="submit">
        Iniciar sesión
      </Button>
                    
    </FormControl>
  );
};

export default Login;
