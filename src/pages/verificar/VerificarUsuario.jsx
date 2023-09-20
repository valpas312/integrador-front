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
  useToast,
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
  //Estados y constantes
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  //Funciones
  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  const { mutate, isLoading, isError, isSuccess, error, data } = useMutation({
    mutationKey: ["verify"],
    mutationFn: () => {
      return axios.post(`${API_URL}/users/verify`, {
        email,
        code,
      });
    },
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(email, code)
    mutate(
      {},
      {
        onSuccess: (data) => {
          console.log(data.data);
          navigate("/");
          dispatch(setVerified());
          toast({
            title: "Usuario verificado",
            description: "Usuario verificado correctamente",
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
    <Form handleOnSubmit={handleOnSubmit} title="Verificar usuario">
      <FormLabel>Correo electrónico</FormLabel>
      <Input
        placeholder="Correo electrónico"
        id="email"
        onChange={handleOnChange}
        isRequired
      />

      <FormLabel>Codigo</FormLabel>
      <HStack>
        <PinInput
          type="alphanumeric"
          mask
          id="code"
          onChange={(e) => (
            setCode(e),
            console.log(e)
          )}
          isRequired
        >
          <PinInputField />
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
      </Center>
    </Form>
  );
};

export default VerificarUsuario;
