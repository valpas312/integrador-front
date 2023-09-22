import {
  FormLabel,
  Input,
  Button,
  Spinner,
  Divider,
  InputGroup,
  InputRightElement,
  Center,
  useToast
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
import { useNavigate } from "react-router-dom";
import Form from "../../components/formControl/Form";

const Login = () => {
  //Estados y constantes
  const navigate = useNavigate();
  const toast = useToast();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");

  //Funciones para el login
  const handleOnChange = (e) => {
    if (e.target.id === "email") {
      setEmail(e.target.value);
    } else {
      setContraseña(e.target.value);
    }
  };

  const { mutate, isLoading, isError, isSuccess, error, data } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => {
      return axios.post(`${API_URL}/users/login`, {
        email,
        contraseña,
      });
    },
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    mutate(
      {},
      {
        onSuccess: () => {
          dispatch(setToken(data.data.token));
          dispatch(setUser(data.data.usuario));
          navigate("/");
          isSuccess && toast({
            title: "Sesion iniciada",
            description: "Sesion iniciada correctamente",
            status: "success",
            duration: 5000,
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
    <Form handleOnSubmit={handleOnSubmit}>
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

      <Center h="50px" display="flex" gap="20px">
        <Button
          type="submit"
          colorScheme="teal"
          size="lg"
          fontSize="sm"
          isLoading={isLoading}
        >
          {isLoading ? (
            <Spinner />
          ) : isError ? (
            handleError(error)
          ) : isSuccess ? (
            data ? (
              data.data.message
            ) : (
              "Sesion iniciada"
            )
          ) : (
            "Iniciar sesión"
          )}
        </Button>

        <Center h="50px">
          <Divider orientation="vertical" my="4" />
        </Center>

        <Button
          colorScheme="blue"
          size="lg"
          fontSize="sm"
          onClick={() => navigate("/register")}
        >
          Registrarse
        </Button>
      </Center>
    </Form>
  );
};

export default Login;
