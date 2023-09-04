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
    Spinner
  } from '@chakra-ui/react'
  import { DeleteIcon } from '@chakra-ui/icons'
  import { useMutation } from '@tanstack/react-query'
  import { API_URL } from '../../utils/constantes'
  import { useNavigate } from 'react-router-dom'
  import axios from 'axios'
  import { useSelector } from 'react-redux'
import { handleError } from '../../utils/handleError'

// eslint-disable-next-line react/prop-types
const InfoModal = ({_id}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const token = useSelector(state => state.token.value)

    const navigate = useNavigate()

    console.log(_id)

    const { mutate, isLoading, error } = useMutation({
        mutationKey: ['turno'],
        mutationFn: () => axios.delete(`${API_URL}/turnos/hard/${_id}`,{
            headers: {
                'x-token': token
            }
        })
    })

    const handleDelete = () => {
        mutate({}, {
            onSuccess: () => {
                onClose()
                navigate('/turnos')
            },
            onError: (error) => {
                console.log(error)
            }
        })
    }

  return (
    <>
      <Button colorScheme='red' onClick={onOpen}>
        <DeleteIcon />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirmar accion</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Esta seguro que desea eliminar el turno? Esta accion no se puede deshacer
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='red' mr={3} onClick={handleDelete}>
                {
                    isLoading ? <Spinner /> : error ? handleError(error) : 'Eliminar'
                }
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default InfoModal