import {
  Flex,
  Image,
  Button,
  IconButton,
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
} from "@chakra-ui/react";
import { useRef } from "react";
import Hamburguer from "../icons/Hamburguer";
import Logo from "../icons/Logo";

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <Flex
      height="48px"
      width="100%"
      paddingLeft="16px"
      boxShadow="0px 2px 4px rgba(33, 33, 33, 0.2)"
    >
      <IconButton
        icon={<Icon as={Hamburguer} />}
        variant="unstyled"
        border="none"
        background="transparent"
        boxSize="50px"
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
      ></IconButton>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Flex marginTop="10px" marginBottom="10px" marginLeft="19%">
        <Logo />
      </Flex>
    </Flex>
  );
}

export default Header;
