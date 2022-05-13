import { Flex, Image, Text, Button, Textarea } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import genericDog from "../assets/genericDog.png";
import { postPetweet } from "../services/petweets";
import { yupResolver } from "@hookform/resolvers/yup";

export default function PostBox() {
  const [size, setSize] = React.useState("0");
  const schema = yup.object({
    content: yup
      .string()
      .max(140)
      .required("A mensagem não poder estar vazia!"),
  });
  const { register, handleSubmit, resetField } = useForm({
    resolver: yupResolver(schema),
  });
  let handleInputChange = (e) => {
    let inputValue = e.target.value.length;
    setSize(inputValue);
  };

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
      height="20vh"
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
            marginRight="18px"
            boxSize="37px"
            marginTop="13px"
          />

          <Textarea
            variant="unstyled"
            {...register("content")}
            onChange={handleInputChange}
            marginTop="13px"
            marginBottom="25px"
            border="none"
            width="50vw"
            fontSize="16px"
            placeholder="O que está acontecendo?"
            maxLength="140"
          />
        </Flex>
        <Flex flexDir="row" alignSelf="end">
          <Text marginRight="8px" marginTop="10px">
            {size}/140
          </Text>
          <Button
            width="90px"
            borderRadius="10"
            backgroundColor="#00ACC1"
            opacity="40%"
            border="none"
            padding="8px"
            color="#FFFFFF"
            fontWeight="700"
            fontSize="12px"
            lineHeight="16px"
            marginRight="40px"
            type="submit"
          >
            Petwittar
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
