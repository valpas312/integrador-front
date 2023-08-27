import { Button } from '@chakra-ui/button'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const SideNavLink = ({text, to}) => {
  return (
    <Button as={Link} color="white" w="100%" bg={"transparent"} _hover={{ bg: "#e25f61" }} borderRadius={0} to={to} >{text}</Button>
  )
}

export default SideNavLink