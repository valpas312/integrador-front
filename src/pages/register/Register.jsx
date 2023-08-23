import { useState } from "react";
// import { useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query";
// import { setToken, setUser } from "../../store/userSlice";
import { API_URL } from "../../utils/constantes";
import axios from "axios";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Spinner
} from "@chakra-ui/react";

const Register = () => {
  // const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [dni, setDni] = useState("");
  const [nombre, setNombre] = useState("");

  const handleOnChange = (e) => {
    if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "contraseña") {
      setContraseña(e.target.value);
    } else if (e.target.id === "dni") {
      setDni(e.target.value);
    } else if (e.target.id === "nombre") {
      setNombre(e.target.value);
    }
  };

  const { mutate, isLoading} = useMutation({
    mutationKey: ["login"],
    mutationFn: () => {
      return axios.post(`${API_URL}/users/`, {
        email,
        contraseña,
        dni,
        nombre
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
          // dispatch(setToken(data.data.token));
          // dispatch(setUser(data.data.usuario));
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };

  return (
    <FormControl as="form" onSubmit={handleOnSubmit}>
      <FormLabel>DNI</FormLabel>
      <Input
        placeholder="DNI"
        id="dni"
        onChange={handleOnChange}
      />

      <FormLabel>Nombre y apellido</FormLabel>
      <Input
        placeholder="Nombre y apellido"
        id="nombre"
        onChange={handleOnChange}
      />

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
        isLoading ? <Spinner /> : "Registrarse"
      }</Button>
    </FormControl>
  );
}

export default Register