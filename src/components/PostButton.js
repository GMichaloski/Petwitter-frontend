import {
  Flex,
  Image,
  Button,
  IconButton,
  FormControl,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Input,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Text,
  Link,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import genericDog from "../assets/genericDog.png";
import { postPetweet } from "../services/petweets";
import { yupResolver } from "@hookform/resolvers/yup";
import PostButtonIcon from "../icons/PostButtonIcon";
import React from "react";

export default function PostButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();

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
      const from = location.state?.from?.pathname || "/home";
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Flex>
      <IconButton
        alignItems="flex-end"
        icon={<Icon as={PostButtonIcon} />}
        onClick={onOpen}
        ref={btnRef}
      />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="full">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
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
                    marginRight="46vw"
                    onClick={onClose}
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
