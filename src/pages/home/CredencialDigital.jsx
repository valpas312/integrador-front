import { Box, Divider, Text } from "@chakra-ui/react"

// eslint-disable-next-line react/prop-types
const CredencialDigital = ({nombre, dni}) => {
  return (
    <Box
        display="flex"
        flexDirection="column"
        gap={1}
        bg="#F1F1F1"
        maxW="80%"
        p={5}
        m={5}
        rounded="md"
    >
        {nombre}
        <Divider my={1} />
        {dni}
        <Box
            display="flex"
            gap={1}
        >
            <Text>Cartilla: Global</Text>
            <Box
                display="flex"
                gap={1}
            >
                <Text>Plan: PCG1</Text>
                <Text>Valido desde: 09/23</Text>
            </Box>
            <Box
                display="flex"
                gap={1}
            >
                <Text>Plan: PCG2</Text>
                <Text>Valido desde: 09/23</Text>
            </Box>
        </Box>
    </Box>
  )
}

export default CredencialDigital