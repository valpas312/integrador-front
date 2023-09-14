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
import { DeleteIcon } from "@chakra-ui/icons";
import { useMutation } from "@tanstack/react-query";
import { API_URL } from "../../utils/constantes";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { handleError } from "../../utils/handleError";
import { eliminarTurno } from "../../features/turnos/turnosSlice";

// eslint-disable-next-line react/prop-types
const InfoModal = ({ _id }) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const token = useSelector((state) => state.token.value);

  const navigate = useNavigate();

  console.log(_id);

  const { mutate, isLoading, error } = useMutation({
    mutationKey: ["turno"],
    mutationFn: () =>
      axios.delete(`${API_URL}/turnos/hard/${_id}`, {
        headers: {
          "x-token": token,
        },
      }),
  });

  const handleDelete = () => {
    mutate(
      {},
      {
        onSuccess: () => {
          onClose();
          toast({
            title: "Turno eliminado",
            description: "Turno eliminado correctamente",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          navigate("/");
          dispatch(eliminarTurno(_id));
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };

  return (
    <>
      <Button colorScheme="red" onClick={onOpen}>
        <DeleteIcon />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirmar accion</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Esta seguro que desea eliminar el turno? Esta accion no se puede
            deshacer
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={handleDelete}>
              {isLoading ? (
                <Spinner />
              ) : error ? (
                handleError(error)
              ) : (
                "Eliminar"
              )}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default InfoModal;
