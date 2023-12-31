import { Box } from '@chakra-ui/react'

// eslint-disable-next-line react/prop-types
const CardsHome = ({children, w}) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gap={2}
      w={w}
      boxShadow="base"
      rounded="md"
      bg="#FFFFFF"
      p={2}
    >
      {children}
    </Box>
  )
}

export default CardsHome