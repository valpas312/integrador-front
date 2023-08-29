import { Button, useToast } from '@chakra-ui/react'

const RegisterToast = () => {
    const toast = useToast()
  return (
    <Button
      onClick={() =>
        toast({
          title: 'Usuario Registrado.',
          description: "Se ha enviado un codigo al email proporcionado para que verifique su usuario desde las opciones de usuario una vez que incie sesion.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      }
    >
      Show Toast
    </Button>
  )
}

export default RegisterToast