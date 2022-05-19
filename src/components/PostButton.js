import {
  Flex,
  Image,
  Button,
  IconButton,
  FormControl,
  Icon,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import genericDog from "../assets/genericDog.png";
import { postPetweet } from "../services/petweets";
import { yupResolver } from "@hookform/resolvers/yup";
import PostButtonIcon from "../icons/PostButtonIcon";
import React from "react";

export default function PostButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("0");

  const btnRef = useRef();

  const schema = yup.object({
    content: yup
      .string()
      .max(140)
      .required("A mensagem não poder estar vazia!"),
  });
  const { register, handleSubmit, resetField } = useForm({
    resolver: yupResolver(schema),
  });
  const toast = useToast();
  let handleInputChange = (e) => {
    let inputValue = e.target.value.length;
    setSize(inputValue);
  };
  const onSubmit = (data) => {
    resetField("content");
    console.log(data);
    try {
      postPetweet(data);
      toast({
        title: "Petweet feito!",
        description: "Recarregue para conferir!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Flex position="static">
      <IconButton
        alignItems="flex-end"
        icon={<Icon as={PostButtonIcon} />}
        background="none"
        onClick={onOpen}
        ref={btnRef}
      />
      <Drawer isOpen={isOpen} onClose={onClose} size="full">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody padding="0">
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
                    marginRight="30vw"
                    fontWeight="thin"
                    marginTop="6px"
                    marginLeft="16px"
                    onClick={onClose}
                  >
                    Cancelar
                  </Button>
                  <Text marginTop="16px" color="#828282" fontSize="14px">
                    {size}/140
                  </Text>
                  <Button
                    width="90px"
                    borderRadius="16"
                    backgroundColor="#00ACC1"
                    opacity="40%"
                    marginTop="6px"
                    marginLeft="14px"
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
                <Flex flexDir="row" marginTop="10px">
                  <Image
                    src={genericDog}
                    marginTop="10px"
                    marginLeft="16px"
                    marginRight="8px"
                    boxSize="37px"
                  ></Image>
                  <Textarea
                    variant="unstyled"
                    {...register("content")}
                    onChange={handleInputChange}
                    marginTop="13px"
                    marginBottom="25px"
                    border="none"
                    width="80vw"
                    height="60vh"
                    fontSize="16px"
                    placeholder="O que está acontecendo?"
                    maxLength="140"
                  />
                </Flex>
              </Flex>
            </FormControl>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
