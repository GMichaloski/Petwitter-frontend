import { Flex, Image, Text, Box, HStack } from "@chakra-ui/react";
import React from "react";
import bigNiko from "../assets/perfil/bigNiko.png";

import { getUserById } from "../services/petweets";
import { useParams } from "react-router-dom";

export default function CardPerfil() {
  const [user, setUser] = React.useState("");
  const { userId } = useParams();
  React.useEffect(() => {
    const fetchUserId = async () => {
      const response = await getUserById(userId);
      setUser(response);
    };
    fetchUserId();
  }, []);
  const { name, username } = user;
  return (
    <Flex flexDir="column" marginTop="16px">
      <Flex flexDir="row">
        <Image src={bigNiko} marginLeft="16px" marginBottom="12px" />
        <Flex flexDir="column" marginLeft="16px">
          <Text
            as="h1"
            fontStyle="normal"
            fontWeight="bold"
            fontSize="22px"
            lineHeight="30px"
          >
            {name}
          </Text>
          <Text fontSize="16px" lineHeight="22px" color="#687684">
            @{username}
          </Text>
        </Flex>
      </Flex>
      <HStack px="4" boxShadow="md">
        <Box
          px="2"
          pb="1"
          borderBottom="solid"
          borderBottomWidth="1"
          borderBottomColor="cyan.400"
        >
          <Text
            color="#424242"
            fontSize="16px"
            lineHeight="22px"
            fontWeight="bold"
          >
            Petposts
          </Text>
        </Box>
      </HStack>
    </Flex>
  );
}
