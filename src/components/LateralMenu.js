import { Button, Flex, Image, Icon } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/home_page/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import Exit from "../icons/Exit";
import Person from "../icons/Person";
import BluePerson from "../icons/BluePerson";
import Home from "../icons/Home";
import BlueHome from "../icons/BlueHome";
import { useAuth } from "../context/auth-context";
import { getFromStorage } from "../services/auth";

export default function LateralMenu(props) {
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
  const { signout } = useAuth();
  const id = getFromStorage("user").id;
  const logout = () => {
    signout();
  };
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
      flexDir="column"
      width="23vw"
      height="100vh"
      boxShadow="0px 0px 4px rgba(33, 33, 33, 0.2)"
    >
      <Image
        src={logo}
        display="block"
        alignSelf="center"
        margin="24px 0px"
        width="225px"
        height="54px"
      />
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
  );
}
