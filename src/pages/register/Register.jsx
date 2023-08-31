import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
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
  useToast,
} from "@chakra-ui/react";
import { handleError } from "../../utils/handleError";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const toast = useToast();

  //estados para el formulario
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [dni, setDni] = useState("");
  const [nombre, setNombre] = useState("");

  //funcion para manejar los cambios en el formulario
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

  //peticion para registrar un usuario
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

  //funcion para manejar el submit del formulario
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    mutate(
      {},
      {
        onSuccess: (data) => {
          console.log(data.data);
          navigate("/login");
          toast({
            title: "Usuario Registrado.",
            description:
              "Se ha enviado un codigo al email proporcionado para que verifique su usuario desde las opciones de usuario una vez que incie sesion.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
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
