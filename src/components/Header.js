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
import Person from "../icons/Person";
import BluePerson from "../icons/BluePerson";
import Home from "../icons/Home";
import BlueHome from "../icons/BlueHome";

function Header(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const { signout } = useAuth();
  const logout = () => {
    signout();
  };
  const navigate = useNavigate();
  const location = useLocation();
  let rgbHome, rgbPerfil, personIcon, homeIcon, homeColor, personColor;
  if (props.home) {
    rgbHome = "rgb(0,172,193,0.1)";
    rgbPerfil = "none";
    homeIcon = BlueHome;
    personIcon = Person;
    homeColor = "#00ACC1";
    personColor = "#424242";
  } else {
    rgbHome = "none";
    rgbPerfil = "rgb(0,172,193,0.1)";
    homeIcon = Home;
    personIcon = BluePerson;
    homeColor = "#424242";
    personColor = "#00ACC1";
  }
  const id = getFromStorage("user").id;
  const clickHome = () => {
    const from = location.state?.from?.pathname || "/home";
    navigate(from, { replace: true });
  };
  const clickPerfil = () => {
    const from = location.state?.from?.pathname || `/perfil/${id}`;
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
              <Button
                border="none"
                leftIcon={<Icon as={homeIcon} />}
                bg={rgbHome}
                onClick={clickHome}
                color={homeColor}
                paddingRight="45px"
                iconSpacing="10px"
              >
                Home
              </Button>
              <Button
                border="none"
                leftIcon={<Icon as={personIcon} />}
                background={rgbPerfil}
                onClick={clickPerfil}
                color={personColor}
                iconSpacing="10px"
              >
                Meu petfil
              </Button>
              <Button
                leftIcon={<Icon as={Exit} />}
                onClick={logout}
                border="none"
                background="transparent"
                paddingRight="61px"
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
