import { HStack, Image } from '@chakra-ui/react'
import logo from "../assets/Logo.webp"
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'
const NavBar = () => {
  return (
    <HStack padding='10px'>
        <Image src={logo} boxSize='50px' margin='10px'/>
        <SearchInput/>
        <ColorModeSwitch/>
    </HStack>
  )
}

export default NavBar