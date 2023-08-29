import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button
  } from '@chakra-ui/react'
import { dateFormatter } from '../../utils/dateFormatter'


// eslint-disable-next-line react/prop-types
const TurnosModal = ({accion, descripcion, fechayhora}) => {
    
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button
      isDisabled={ fechayhora < dateFormatter(new Date()) }
      onClick={onOpen}>{accion}</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{accion}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {descripcion}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='teal' mr={3} onClick={onClose}>
              {accion}
            </Button>
            <Button variant='outline' onClick={onClose}>Cerrar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default TurnosModal