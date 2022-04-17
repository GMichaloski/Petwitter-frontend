import { Flex, Image, Input, Button } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import genericDog from "../assets/genericDog.png";
import { postPetweet } from "../services/petweets";
import { yupResolver } from "@hookform/resolvers/yup";

export default function PostBox() {
  const schema = yup.object({
    content: yup
      .string()
      .max(140)
      .required("A mensagem não poder estar vazia!"),
  });
  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => {
    console.log(data);
    try {
      postPetweet(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Flex
      height="202px"
      width="54vw"
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      boxShadow="0px 2px 4px rgba(33, 33, 33, 0.2)"
    >
      <Flex flexDir="column">
        <Flex flexDir="row">
          <Image
            src={genericDog}
            marginLeft="16px"
            marginRight="8px"
            boxSize="37px"
            display="block"
            alignSelf="center"
          ></Image>
          <Input
            {...register("content")}
            marginTop="13px"
            border="none"
            width="50vw"
            height="145px"
            display="block"
            alignSelf="center"
            fontSize="16px"
            placeholder="O que está acontecendo?"
          />
        </Flex>
        <Button
          width="90px"
          borderRadius="10"
          backgroundColor="#00ACC1"
          display="block"
          alignSelf="end"
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
    </Flex>
  );
}
