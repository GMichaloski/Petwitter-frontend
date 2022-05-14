import React from "react";
import { Flex, Image, Text, Box, HStack } from "@chakra-ui/react";
import bigBigNiko from "../assets/perfil/bigBigNiko.png";
import { getUserById } from "../services/petweets";
import { useParams } from "react-router-dom";

export default function CardPerfilDesktop() {
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
    <Flex flexDir="column" width="54vw">
      <Flex flexDir="row" marginTop="36px" marginBottom="40px">
        <Image src={bigBigNiko} marginLeft="30px" alignSelf="center" />
        <Flex
          flexDir="column"
          marginLeft="30px"
          alignSelf="center"
          marginTop="0px"
        >
          <Text
            as="h1"
            fontStyle="normal"
            fontWeight="bold"
            fontSize="24px"
            lineHeight="30px"
          >
            {name}
          </Text>
          <Text
            fontSize="16px"
            lineHeight="22px"
            color="#687684"
            marginTop="12px"
          >
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
