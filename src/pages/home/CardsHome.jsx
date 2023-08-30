import { Box } from '@chakra-ui/react'

// eslint-disable-next-line react/prop-types
const CardsHome = ({children}) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      w="30%"
      boxShadow="base"
      h="30%"
      rounded="md"
    >
      {children}
    </Box>
  )
}

export default CardsHome