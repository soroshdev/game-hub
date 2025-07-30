import { HStack, Image, Text } from '@chakra-ui/react'
import logo from "../assets/Logo.webp"
const NavBar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize='50px' margin='10px'/>
        <Text>Navbar</Text>
    </HStack>
  )
}

export default NavBar