import {
  Button,
  Flex,
  FormControl,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import genericDog from "../assets/genericDog.png";
import { postPetweet } from "../services/petweets";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Petweet() {
  const navigate = useNavigate();
  const location = useLocation();
  const schema = yup.object({
    content: yup
      .string()
      .max(140)
      .required("A mensagem não poder estar vazia!"),
  });
  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  const handleCancelClick = () => {
    const from = location.state?.from?.pathname || "/home";
    navigate(from, { replace: true });
  };

  const onSubmit = (data) => {
    console.log(data);
    try {
      postPetweet(data);
      const from = location.state?.from?.pathname || "/home";
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };
  const handlePetweetClick = () => {};
  return (
    <FormControl>
      <Flex
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        flexDir="column"
        width="100vw"
        height="90px"
        boxShadow="0px 2px 4px rgba(33, 33, 33, 0.2)"
      >
        <Flex flexDir="row" marginTop="22px" marginBottom="24px">
          <Button
            border="none"
            background="transparent"
            onClick={handleCancelClick}
            marginLeft="16px"
            marginRight="46vw"
          >
            Cancelar
          </Button>
          <Text>0/140</Text>
          <Button
            width="90px"
            borderRadius="10"
            backgroundColor="#00ACC1"
            opacity="40%"
            marginLeft="14px"
            border="none"
            padding="8px"
            color="#FFFFFF"
            fontWeight="700"
            fontSize="12px"
            lineHeight="16px"
            marginRight="16px"
            type="submit"
          >
            Petwittar
          </Button>
        </Flex>
        <Flex flexDir="row">
          <Image
            src={genericDog}
            marginLeft="16px"
            marginRight="8px"
            boxSize="37px"
          ></Image>
          <Input
            {...register("content")}
            marginTop="13px"
            border="none"
            width="80vw"
            fontSize="16px"
            placeholder="O que está acontecendo?"
          />
        </Flex>
      </Flex>
    </FormControl>
  );
}
