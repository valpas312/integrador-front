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

  import { InfoIcon } from '@chakra-ui/icons'

const InfoModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button variant="outline" onClick={onOpen}>
        <InfoIcon />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Aclaracion importante</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Si usted no va a asustir a la consulta, por favor, no confirme su turno, se le dara de baja automaticamente.
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='teal' mr={3} onClick={onClose}>
                Entendido
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default InfoModal