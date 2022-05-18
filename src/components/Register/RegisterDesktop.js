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
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import LogoLC from "../../icons/LogoLC";
import PataButAzul from "../../icons/PataButAzul";
import MenuDoggo from "../../assets/login_page/MenuDoggo.png";

export default function RegisterDesktop() {
  const schema = yup.object({
    name: yup.string().required("Nome é obrigatório!"),
    email: yup.string().required("Email é obrigatório!"),
    username: yup
      .string()
      .min(5, "Mínimo de 5 caracteres")
      .required("Username é obrigatório!"),
    password: yup
      .string()
      .min(5, "Mínimo de 5 caracteres")
      .required("Senha é obrigatória!")
      .matches(
        /^.*(?=.{5,})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "A senha deve conter, ao menos, 5 caracteres, uma maiścula, uma minúscula e um número"
      ),
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
    <Flex flexDir="row">
      <Flex
        flexDir="column"
        display="flex"
        justifyContent={"center"}
        minHeight="100vh"
        width="44vw"
        backgroundImage={MenuDoggo}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Flex flexDir="row" marginLeft="10.75vw">
          <Icon as={LogoLC} />
        </Flex>
      </Flex>

      {/* FORMS */}
      <Flex flexDir="column" marginLeft="66px" marginRight="32px" width="50vw">
        <Flex marginTop="51px">
          <Icon as={PataButAzul} />
        </Flex>
        <Text
          fontWeight="600"
          fontSize="20px"
          lineHeight="40px"
          color="#212121"
          marginTop="32px"
          marginBottom="24px"
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
              width="48vw"
              height="40px"
              border="solid 2px"
              borderRadius="4px"
              borderColor="#757575"
              marginBottom="24px"
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
              width="48vw"
              height="40px"
              border="solid 2px"
              borderRadius="4px"
              borderColor="#757575"
              marginBottom="24px"
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
              width="48vw"
              height="40px"
              border="solid 2px"
              borderRadius="4px"
              borderColor="#757575"
              marginBottom="24px"
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
                width="48vw"
                height="40px"
                border="solid 2px"
                borderRadius="4px"
                borderColor="#757575"
                {...register("password")}
              />
              <InputRightElement>
                <IconButton
                  variant="unstyled"
                  aria-label="Show password"
                  border="none"
                  background="transparent"
                  paddingTop="4px"
                  marginRight="80px"
                  fontSize="30px"
                  icon={<Icon as={show ? AiFillEyeInvisible : AiFillEye} />}
                  onClick={handleClick}
                ></IconButton>
              </InputRightElement>
            </InputGroup>
            <FormLabel
              color="#424242"
              fontWeight="400"
              fontSize="12px"
              lineHeight="16px"
              marginBottom="36px"
            >
              Deve conter no mínimo um número e uma letra maiúscula
            </FormLabel>
            <Button
              height="40px"
              width="48.25vw"
              border="2px"
              backgroundColor="#00ACC1"
              borderRadius="4px"
              variant="solid"
              color="white"
              marginBottom="24px"
              type="submit"
            >
              Cadastrar
            </Button>
          </FormControl>
        </Flex>
        <Flex flexDir="row">
          <Text margin="0px">Já possui cadastro?</Text>
          <Link
            marginLeft="5px"
            href={`/login`}
            font="cyan.400"
            color="#00ACC1"
          >
            Faça login
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
