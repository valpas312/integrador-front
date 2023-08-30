import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Divider,
  Spinner,
  Select,
} from "@chakra-ui/react";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { API_URL, medicos, especialidades } from "../../utils/constantes";
import { useSelector } from "react-redux";
import { handleError } from "../../utils/handleError";
import { useNavigate } from "react-router-dom";

const CrearTurno = () => {
  const navigate = useNavigate();

  //token del usuario
  const token = useSelector((state) => state.token.value);

  //estados para el formulario
  const [fechayhora, setFechayhora] = useState("");
  const [medico, setMedico] = useState("");
  const [especialidad, setEspecialidad] = useState("");

  //funcion para manejar los cambios en el formulario
  const handleOnChange = (e) => {
    if (e.target.id === "fechayhora") {
      setFechayhora(e.target.value);
    } else if (e.target.id === "medico") {
      setMedico(e.target.value);
    } else if (e.target.id === "especialidad") {
      setEspecialidad(e.target.value);
    }
  };

  //peticion para crear un turno
  const { mutate, isLoading, isError, isSuccess, error, data } = useMutation({
    mutationKey: ["turno"],
    mutationFn: () => {
      return axios.post(
        `${API_URL}/turnos/`,
        {
          fechayhora,
          reservacion: Date.now(),
          paciente: token,
          medico,
          especialidad,
        },
        {
          headers: {
            "x-token": token,
          },
        }
      );
    },
  });

  //funcion para manejar el submit del formulario
  const handleOnSubmit = (e) => {
    e.preventDefault();
    mutate(
      {},
      {
        onSuccess: (data) => {
          console.log(data.data)
          navigate("/");
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };

  return (
    <>
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
        <FormLabel>Fecha y Hora</FormLabel>
        <Input
          type="datetime-local"
          id="fechayhora"
          onChange={handleOnChange}
          isRequired
        />

        <FormLabel>Medico</FormLabel>
        <Select placeholder="Select option" id="medico" onChange={handleOnChange} isRequired>
            {medicos.map((medico) => (
                <option key={medico} value={medico}>
                    {medico}
                </option>
            ))}
        </Select>

        <FormLabel>Especialidad</FormLabel>
        <Select placeholder="Select option" id="especialidad" onChange={handleOnChange} isRequired>
            {especialidades.map((especialidad) => (
                <option key={especialidad} value={especialidad}>
                    {especialidad}
                </option>
            ))}
        </Select>

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
            data
          ) : (
            "Crear Turno"
          )}
        </Button>
      </FormControl>
    </>
  );
};

export default CrearTurno;
