import LoginDoggo from "../../assets/login_page/LoginDoggo.png";
import LogoLC from "../../icons/LogoLC";
import React from "react";
import {
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  IconButton,
  Icon,
  FormControl,
  FormLabel,
  Text,
  Link,
} from "@chakra-ui/react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { useForm } from "react-hook-form";
import PataButAzul from "../../icons/PataButAzul";

export default function LoginDesktop() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const { signin } = useAuth();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const from = location.state?.from?.pathname || "/home";

  async function onSubmit(data) {
    const { email, password } = data;
    await signin({ email, password });
    navigate(from, { replace: true });
  }
  return (
    <Flex>
      <Flex
        flexDir="column"
        display="flex"
        justifyContent={"center"}
        minHeight="100vh"
        width="45vw"
        backgroundImage={LoginDoggo}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Flex flexDir="row" marginLeft="10.75vw">
          <Icon as={LogoLC} />
        </Flex>
      </Flex>
      {/* Forms  */}
      <Flex flexDir="column" marginLeft="72px" marginRight="72px">
        <Flex marginTop="52px" marginBottom="20px">
          <Icon as={PataButAzul}></Icon>
        </Flex>

        <Text
          fontSize="36px"
          color="#00ACC1"
          fontWeight="700"
          lineHeight="49px"
          marginBottom="0px"
        >
          Comece agora.
        </Text>
        <Text
          fontSize="36px"
          color="#00ACC1"
          fontWeight="700"
          lineHeight="49px"
          marginTop="0px"
          marginBottom="32px"
        >
          Conecte-se já.
        </Text>
        <Text
          fontWeight="600"
          fontSize="24px"
          lineHeight="40px"
          color="#212121"
          marginBottom="32px"
        >
          Login
        </Text>
        <Flex as="form" onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            <FormLabel
              color="#424242"
              fontWeight="600"
              fontSize="14px"
              lineHeight="16px"
              marginBottom="8px"
            >
              E-mail
            </FormLabel>
            <Input
              placeholder="E-mail"
              width="45vw"
              height="40px"
              border="solid 2px"
              borderRadius="4px"
              borderColor="#00ACC1"
              marginBottom="32px"
              {...register("email")}
            ></Input>
            <FormLabel
              color="#424242"
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
                width="45vw"
                height="40px"
                border="solid 2px"
                borderRadius="4px"
                borderColor="#757575"
                {...register("password")}
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
              width="45.5vw"
              border="2px"
              backgroundColor="#00ACC1"
              borderRadius="4px"
              variant="solid"
              color="white"
              marginBottom="24px"
              type="submit"
            >
              Entrar
            </Button>
          </FormControl>
        </Flex>
        <Flex flexDir="row">
          <Text margin="0px">Ainda não possui uma conta?</Text>
          <Link
            marginLeft="5px"
            href={`http://localhost:3000/register`}
            font="cyan.400"
          >
            Cadastrar-se
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
