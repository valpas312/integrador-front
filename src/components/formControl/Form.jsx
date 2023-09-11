import { FormControl, useMediaQuery } from "@chakra-ui/react"

// eslint-disable-next-line react/prop-types
const Form = ({children, handleOnSubmit}) => {
    const [isLargerThan344] = useMediaQuery("(min-width: 500px)")
  return (
    <FormControl
      as="form"
      onSubmit={handleOnSubmit}
      maxW={
        isLargerThan344 ? "lg" : "340px"
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