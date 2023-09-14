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
  useToast
} from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { API_URL } from "../../utils/constantes";
import { handleError } from "../../utils/handleError";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isDisabled } from "../../utils/handleIsDisabled";
import { confirmarTurno } from "../../features/turnos/turnosSlice";

// eslint-disable-next-line react/prop-types
const TurnosModal = ({ accion, descripcion, fechayhora, _id, estado }) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.token.value);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { mutate, isLoading, isSuccess, error } = useMutation({
    mutationKey: ["confirmarTurno"],
    mutationFn: () => {
      axios.put(
        `${API_URL}/turnos/${_id}`,
        {},
        {
          headers: {
            "x-token": token,
          },
        }
      );
    },
  });

  const handleConfirmarTurno = () => {
    mutate(
      {},
      {
        onSuccess: () => {
          onClose();
          toast({
            title: "Turno confirmado",
            description: "Turno confirmado correctamente",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          navigate("/");
          dispatch(confirmarTurno(_id));
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };
  return (
    <>
      <Button isDisabled={isDisabled(fechayhora, estado)} onClick={onOpen}>
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
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TurnosModal;
