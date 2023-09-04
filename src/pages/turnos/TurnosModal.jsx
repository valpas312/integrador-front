import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Spinner,
} from "@chakra-ui/react";
import { dateFormatter } from "../../utils/dateFormatter";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { API_URL } from "../../utils/constantes";
import { handleError } from "../../utils/handleError";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const TurnosModal = ({ accion, descripcion, fechayhora, _id, estado }) => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.token.value);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { mutate, isLoading, isSuccess, error } = useMutation({
    mutationKey: ["confirmarTurno"],
    mutationFn: () => {
      axios
        .put(`${API_URL}/turnos/${_id}`,{}, {
          headers: {
            "x-token":  token,
          },
        })
    },
  });

  const handleConfirmarTurno = () => {
    mutate(
      {},
      {
        onSuccess: () => {
          onClose();
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
      <Button
        isDisabled={fechayhora < dateFormatter(new Date()) || estado === "Confirmado" || estado === "Cancelado" }
        onClick={onOpen}
      >
        {accion}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{accion}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{descripcion}</ModalBody>

          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={handleConfirmarTurno}>
              {isLoading ? (
                <Spinner />
              ) : isSuccess ? (
                "Turno confirmado"
              ) : error ? (
                handleError(error)
              ) : (
                accion
              )}
            </Button>
            <Button variant="outline" onClick={onclose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TurnosModal;
