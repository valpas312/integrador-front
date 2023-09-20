//Componente Form estilado y funcional para uso en formularios
import { FormControl, useMediaQuery } from "@chakra-ui/react"

// eslint-disable-next-line react/prop-types
const Form = ({children, handleOnSubmit}) => {
    const [isLargerThan500] = useMediaQuery("(min-width: 500px)")
  return (
    <FormControl
      as="form"
      onSubmit={handleOnSubmit}
      maxW={
        isLargerThan500 ? "lg" : "100%"
      }
      mx="auto"
      my="8"
      p="8"
      bg="white"
      borderRadius="md"
      boxShadow="md"
    >
    {children}
    </FormControl>
  )
}

export default Form