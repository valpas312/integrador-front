import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Spinner,
  Divider,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";
import { API_URL } from "../../utils/constantes";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../../features/token/tokenSlice";
import { setUser } from "../../features/user/userSlice";
import { handleError } from "../../utils/handleError";

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

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

  const { mutate, isLoading, isError, isSuccess, error } = useMutation({
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
      <FormLabel>Correo electrónico</FormLabel>
      <Input
        placeholder="Correo electrónico"
        id="email"
        onChange={handleOnChange}
        isRequired
      />

      <FormLabel>Contraseña</FormLabel>
      <InputGroup>
        <Input
          placeholder="Contraseña"
          id="contraseña"
          onChange={handleOnChange}
          type={show ? "text" : "password"}
          isRequired
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>

      <Divider my="4" />

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
          "Iniciado sesión"
        ) : (
          "Iniciar sesión"
        )}
      </Button>
    </FormControl>
  );
};

export default Login;
