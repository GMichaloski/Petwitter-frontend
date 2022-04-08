import {
  Box,
  Flex,
  Image,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  IconButton,
  Link,
  Icon,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import React from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import dogBackground from "../assets/login_page/dogBackground.png";
import symbol from "../assets/login_page/symbol.png";
import logo from "../assets/login_page/logo.png";
import { useAuth } from "../context/auth-context";
function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { signin } = useAuth();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const from = location.state?.from?.pathname || "/";

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    await signin({ email, password });
    navigate(from, { replace: true });
  }

  return (
    <Flex flexDir="column">
      <Flex
        flexDir="column"
        display="flex"
        justifyContent={"center"}
        minHeight="70vw"
        backgroundImage={dogBackground}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Flex flexDir="column" marginLeft="32px" marginRight="32px">
          <Image
            src={symbol}
            boxSize="52px"
            marginTop="45px"
            marginBottom="40px"
          />
          <Text
            margin="0px"
            fontFamily="sans-serif"
            fontWeight="bold"
            fontSize="36px"
            color="white"
          >
            Comece agora.
          </Text>
          <Text
            margin="0px"
            fontFamily="sans-serif"
            fontWeight="bold"
            fontSize="36px"
            color="white"
          >
            Conecte-se já.
          </Text>
        </Flex>
      </Flex>
      <Flex flexDir="column" marginLeft="32px" marginRight="32px">
        <Text
          fontStyle="normal"
          fontWeight="600"
          fontSize="24px"
          lineHeight="40px"
        >
          Login
        </Text>
        <Flex as="form">
          <FormControl>
            <FormLabel
              fontWeight="600"
              fontSize="14px"
              lineHeight="16px"
              marginBottom="8px"
            >
              E-mail
            </FormLabel>
            <Input
              placeholder="E-mail"
              width="82vw"
              height="40px"
              border="solid 2px"
              borderRadius="4px"
              borderColor="#00ACC1"
              marginBottom="32px"
            ></Input>
            <FormLabel
              fontWeight="600"
              fontSize="14px"
              lineHeight="16px"
              marginBottom="8px"
            >
              Senha
            </FormLabel>
            <InputGroup marginBottom="40px">
              <Input
                variant="null"
                type={show ? "text" : "password"}
                placeholder="Senha"
                width="82vw"
                height="40px"
                border="solid 2px"
                borderRadius="4px"
                borderColor="#757575"
              />
              <InputRightElement>
                <IconButton
                  padding="13px"
                  variant="unstyled"
                  aria-label="Show password"
                  border="none"
                  background="transparent"
                  fontSize="20px"
                  icon={<Icon as={show ? AiFillEyeInvisible : AiFillEye} />}
                  onClick={handleClick}
                ></IconButton>
              </InputRightElement>
            </InputGroup>
            <Button
              height="40px"
              width="83.25vw"
              border="2px"
              backgroundColor="#00ACC1"
              borderRadius="4px"
              variant="solid"
              color="white"
              marginBottom="24px"
            >
              Entrar
            </Button>
          </FormControl>
        </Flex>
        <Text margin="0px">Ainda não possui uma conta?</Text>
        <Link href={`http://localhost:3000/register`} font="cyan.400">
          Cadastrar-se
        </Link>
      </Flex>
      <Image
        src={logo}
        height="43px"
        width="179.17px"
        marginTop="57px"
        marginBottom="24px"
        display="block"
        alignSelf="center"
      />
    </Flex>
  );
}

export default Login;
