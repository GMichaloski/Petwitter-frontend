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
import logo from "../../assets/login_page/logo.png";
import React from "react";
import dogBackground from "../../assets/login_page/dogBackground.png";
import symbol from "../../assets/login_page/symbol.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

export default function RegisterMobile() {
  const schema = yup.object({
    name: yup.string().required("Nome é obrigatório!"),
    email: yup.string().required("Email é obrigatório!").email(),
    username: yup
      .string()
      .min(5, "Mínimo de 5 caracteres")
      .required("Username é obrigatório!"),
    password: yup
      .string()
      .min(5, "Mínimo de 5 caracteres")
      .required("Senha é obrigatória!"),
  });
  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });
  const navigate = useNavigate();
  const location = useLocation();
  const { registerAccount } = useAuth();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  async function onSubmit(data) {
    console.log(data);
    await registerAccount(data);
    const from = location.state?.from?.pathname || "/login";
    navigate(from, { replace: true });
  }
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
          marginBottom="32px"
        >
          Cadastro
        </Text>
        <Flex as="form" onSubmit={handleSubmit(onSubmit)}>
          <FormControl isRequired>
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
              {...register("name")}
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
              {...register("email")}
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
              {...register("username")}
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
                {...register("password")}
              />
              <InputRightElement>
                <IconButton
                  padding="13px"
                  variant="unstyled"
                  aria-label="Show password"
                  border="none"
                  background="transparent"
                  paddingTop="4px"
                  marginRight="40px"
                  fontSize="30px"
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
              type="submit"
            >
              Entrar
            </Button>
          </FormControl>
        </Flex>
        <Text margin="0px">Já possui cadastro?</Text>
        <Link href={`/login`} color="#00ACC1" font="cyan.400">
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
