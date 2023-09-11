import {
  FormLabel,
  Input,
  Button,
  Spinner,
  Divider,
  Center,
  HStack,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
import axios from "axios";
import { API_URL } from "../../utils/constantes";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { handleError } from "../../utils/handleError";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setVerified } from "../../features/user/userSlice";
import Form from "../../components/formControl/Form";

const VerificarUsuario = () => {
  const navigate = useNavigate();
    const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  const { mutate, isLoading, isError, isSuccess, error, data } = useMutation({
    mutationKey: ["verify"],
    mutationFn: () => {
      return axios.post(`${API_URL}/users/verify`, {
        email,
        code
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
          navigate("/");
          dispatch(setVerified());
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };
  return (
    <Form onSubmit={handleOnSubmit} title="Verificar usuario">
      <FormLabel>Correo electrónico</FormLabel>
      <Input
        placeholder="Correo electrónico"
        id="email"
        onChange={handleOnChange}
        isRequired
      />

      <FormLabel>Codigo</FormLabel>
      <HStack>
        <PinInput type="alphanumeric" mask id="code" onChange={(e) => setCode(e)} isRequired >
          <PinInputField  />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>

      <Divider my="4" />

      <Center h="50px" display="flex" gap="20px">
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
            data ? (
              data.data.message
            ) : (
              "Usuario verificado"
            )
          ) : (
            "Verificar usuario"
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
          Registrarse
        </Button>
      </Center>
    </Form>
  );
};

export default VerificarUsuario;
