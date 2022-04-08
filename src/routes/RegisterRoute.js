import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Text,
  InputGroup,
  InputRightElement,
  Icon,
  IconButton,
  Link,
} from "@chakra-ui/react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import logo from "../assets/login_page/logo.png";
import React from "react";
import dogBackground from "../assets/login_page/dogBackground.png";
import symbol from "../assets/login_page/symbol.png";
function Register() {
  const [show, setShow] = React.useState(false);

  const handleClick = () => setShow(!show);

  return (
    <Flex flexDirection="column">
      <Flex>
        <Flex
          flexDir="column"
          display="flex"
          justifyContent={"center"}
          minHeight="143px"
          width="100vw"
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
          </Flex>
        </Flex>
      </Flex>
      <Flex flexDir="column" marginLeft="32px" marginRight="32px">
        <Text
          fontWeight="600"
          fontSize="24px"
          lineHeight="40px"
          color="#212121"
          marginTop="32px"
        >
          Cadastro
        </Text>
        <Flex as="form">
          <FormControl>
            <FormLabel
              fontWeight="600"
              fontSize="14px"
              lineHeight="16px"
              marginBottom="8px"
              color="#424242"
            >
              Nome
            </FormLabel>
            <Input
              placeholder="Nome"
              width="82vw"
              height="40px"
              border="solid 2px"
              borderRadius="4px"
              borderColor="#00ACC1"
              marginBottom="16px"
            ></Input>
            <FormLabel
              fontWeight="600"
              fontSize="14px"
              lineHeight="16px"
              marginBottom="8px"
              color="#424242"
            >
              E-mail
            </FormLabel>
            <Input
              placeholder="E-mail"
              width="82vw"
              height="40px"
              border="solid 2px"
              borderRadius="4px"
              borderColor="#757575"
              marginBottom="16px"
            ></Input>
            <FormLabel
              fontWeight="600"
              fontSize="14px"
              lineHeight="16px"
              marginBottom="8px"
              color="#424242"
            >
              Nome de usuário
            </FormLabel>
            <Input
              placeholder="Ex.:@billbulldog"
              width="82vw"
              height="40px"
              border="solid 2px"
              borderRadius="4px"
              borderColor="#757575"
              marginBottom="16px"
            ></Input>
            <FormLabel
              fontWeight="600"
              fontSize="14px"
              lineHeight="16px"
              marginBottom="8px"
              color="#424242"
            >
              Senha
            </FormLabel>
            <InputGroup marginBottom="4px">
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
            <FormLabel
              color="#424242"
              fontWeight="400"
              fontSize="10px"
              lineHeight="16px"
              marginBottom="36px"
            >
              Deve conter no mínimo um número e uma letra maiúscula
            </FormLabel>
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
        <Text margin="0px">Já possui cadastro?</Text>
        <Link href={`http://localhost:3000/login`} font="cyan.400">
          Faça login
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

export default Register;
