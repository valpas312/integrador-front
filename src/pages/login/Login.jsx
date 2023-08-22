import { FormControl, FormLabel, Input, Button, Spinner } from "@chakra-ui/react";
import axios from "axios";
import { API_URL } from "../../utils/constantes";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../../features/token/tokenSlice";
import { setUser } from "../../features/user/userSlice";

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");

  const handleOnChange = (e) => {
    if (e.target.id === "email") {
      setEmail(e.target.value);
    } else {
      setContraseña(e.target.value);
    }
  };

  const { mutate, isLoading} = useMutation({
    mutationKey: ["login"],
    mutationFn: () => {
      return axios.post(`${API_URL}/users/login`, {
        email,
        contraseña,
      });
    },
  });

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    mutate(
      {},
      {
        onSuccess: (data) => {
          console.log(data.data);
          dispatch(setToken(data.data.token));
          dispatch(setUser(data.data.usuario));
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };

  return (
    <FormControl as="form" onSubmit={handleOnSubmit}>
      <FormLabel>Correo electrónico</FormLabel>
      <Input
        placeholder="Correo electrónico"
        id="email"
        onChange={handleOnChange}
      />

      <FormLabel>Contraseña</FormLabel>
      <Input
        placeholder="Contraseña"
        id="contraseña"
        onChange={handleOnChange}
      />

      <Button type="submit">{
        isLoading ? <Spinner /> : "Iniciar sesión"
      }</Button>
    </FormControl>
  );
};

export default Login;
