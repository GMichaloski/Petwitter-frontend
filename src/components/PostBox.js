import { Flex, Image, Input, Button, Textarea } from "@chakra-ui/react";
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
  const { register, handleSubmit, resetField } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    resetField("content");
    console.log(data);
    try {
      postPetweet(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Flex
      height="25vh"
      width="54vw"
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      boxShadow="0px 8px 0px rgb(229, 229, 229)"
    >
      <Flex flexDir="column">
        <Flex flexDir="row" marginTop="20px">
          <Image
            src={genericDog}
            marginLeft="16px"
            marginRight="8px"
            boxSize="37px"
            marginTop="13px"
          />

          <Textarea
            {...register("content")}
            marginTop="13px"
            border="none"
            width="50vw"
            fontSize="16px"
            placeholder="O que está acontecendo?"
          />
        </Flex>
        <Button
          width="90px"
          borderRadius="10"
          backgroundColor="#00ACC1"
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
