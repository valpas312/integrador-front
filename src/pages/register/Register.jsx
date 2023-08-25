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
  Spinner,
  Divider,
  Center,
} from "@chakra-ui/react";
import { handleError } from "../../utils/handleError";
import { useNavigate } from "react-router-dom";

const Register = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const { mutate, isLoading, isError, error, isSuccess, data } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => {
      return axios.post(`${API_URL}/users/`, {
        email,
        contraseña,
        dni,
        nombre,
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
          navigate("/login");
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };

  return (
    <FormControl
      as="form"
      onSubmit={handleOnSubmit}
      maxW="lg"
      mx="auto"
      my="8"
      p="8"
      bg="white"
      borderRadius="md"
      boxShadow="md"
    >
      <FormLabel>DNI</FormLabel>
      <Input placeholder="DNI" id="dni" onChange={handleOnChange} isRequired />

      <FormLabel>Nombre y apellido</FormLabel>
      <Input
        placeholder="Nombre y apellido"
        id="nombre"
        onChange={handleOnChange}
        isRequired
      />

      <FormLabel>Correo electrónico</FormLabel>
      <Input
        placeholder="Correo electrónico"
        id="email"
        onChange={handleOnChange}
        isRequired
      />

      <FormLabel>Contraseña</FormLabel>
      <Input
        placeholder="Contraseña"
        id="contraseña"
        onChange={handleOnChange}
        isRequired
      />

      <Divider my="4" />

      <Center display="flex" gap="20px">
        <Button
          type="submit"
          colorScheme="teal"
          size="lg"
          fontSize="md"
          isLoading={isLoading}
        >
          {isLoading ? (
            <Spinner />
          ) : isError ? (
            handleError(error)
          ) : isSuccess ? (
            data.data.message
          ) : (
            "Registrarse"
          )}
        </Button>
        <Center h="50px">
          <Divider orientation="vertical" my="4" />
        </Center>

        <Button
          colorScheme="blue"
          size="lg"
          fontSize="md"
          onClick={() => navigate("/login")}
        >
          Iniciar sesión
        </Button>
      </Center>
    </FormControl>
  );
};

export default Register;
