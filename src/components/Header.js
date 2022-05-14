import {
  Flex,
  Image,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Input,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Text,
  Link,
} from "@chakra-ui/react";
import genericBigger from "../assets/home_page/genericBigger.png";
import { getFromStorage } from "../services/auth";
import { useAuth } from "../context/auth-context";
import { useRef } from "react";
import Hamburguer from "../icons/Hamburguer";
import Logo from "../icons/Logo";
import Exit from "../icons/Exit";
import { useLocation, useNavigate } from "react-router-dom";

function Header(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const { signout } = useAuth();
  const logout = () => {
    signout();
  };
  const navigate = useNavigate();
  const location = useLocation();
  let rgbHome, rgbPerfil;
  if (props.home) {
    rgbHome = "rgb(0,172,193,0.1)";
    rgbPerfil = "none";
  } else {
    rgbHome = "none";
    rgbPerfil = "rgb(0,172,193,0.1)";
  }
  const id = getFromStorage("user").id;
  const clickHome = () => {
    const from = location.state?.from?.pathname || "/home";
    navigate(from, { replace: true });
  };
  const clickPerfil = () => {
    const from = location.state?.from?.pathname || `/perfil/${id}`;
    console.log(from);
    navigate(from, { replace: true });
  };
  return (
    <Flex
      height="48px"
      paddingLeft="16px"
      boxShadow="0px 2px 4px rgba(33, 33, 33, 0.2)"
    >
      <IconButton
        icon={<Icon as={Hamburguer} />}
        variant="unstyled"
        border="none"
        background="transparent"
        boxSize="50px"
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
      ></IconButton>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <Flex flexDir="column">
              <Image
                src={genericBigger}
                boxSize="56px"
                alignSelf="center"
                marginTop="40px"
                marginBottom="40px"
              ></Image>
              <Button border="none" bg={rgbHome} onClick={clickHome}>
                Home
              </Button>
              <Button
                border="none"
                background={rgbPerfil}
                onClick={clickPerfil}
                marginBottom="20px"
              >
                Meu perfil
              </Button>
              <Button
                leftIcon={<Icon as={Exit} />}
                onClick={logout}
                border="none"
                background="transparent"
              >
                Sair
              </Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Flex marginTop="10px" marginBottom="10px" marginLeft="19%">
        <Logo />
      </Flex>
    </Flex>
  );
}

export default Header;
