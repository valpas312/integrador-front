import { Button } from "@chakra-ui/react"

// eslint-disable-next-line react/prop-types
const TurnosButton = ({children, onClick}) => {
  return (<Button
    as={"button"}
    bg="#FF686B"
    color="white"
    _hover={{ bg: "#e25f61" }}
    _active={{ bg: "#e25f61" }}
    maxW="50%"
    borderRadius={2}
    onClick={onClick}
  >
    {children}
  </Button>)
}

export default TurnosButton