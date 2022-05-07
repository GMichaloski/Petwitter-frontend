import { Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import Niko from "../assets/Niko.png";
import TimeAgo from "react-timeago";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
import ptBrStrings from "react-timeago/lib/language-strings/pt-br";
import { getUserById } from "../services/petweets";

export default function Petweet({ userId, createAt, content }) {
  const [user, setUser] = React.useState("");

  React.useEffect(() => {
    const fetchUserId = async () => {
      const response = await getUserById(userId);
      setUser(response);
    };
    fetchUserId();
  }, []);
  console.log(user);
  const { name, username } = user;
  const formatter = buildFormatter(ptBrStrings);

  return (
    <Flex flexDir="row">
      <Image src={Niko} />
      <Flex flexDir="column">
        <Link to={`/profile/${userId}`}>
          <Text
            fontWeight="bold"
            fontSize="14px"
            lineHeight="19px"
            color="gray.600"
            wordBreak="break-word"
          >
            {name}
          </Text>
        </Link>
        <Text
          fontWeight="300"
          fontSize="12px"
          lineHeight="17px"
          color="gray.600"
          wordBreak="break-word"
        >
          {`@${username}`}
        </Text>
        <Text
          fontWeight="300"
          fontSize="12px"
          lineHeight="17px"
          color="gray.600"
          wordBreak="break-word"
        >
          •
        </Text>
        <Text
          fontWeight="300"
          fontSize="12px"
          lineHeight="17px"
          color="gray.600"
          wordBreak="break-word"
        >
          <TimeAgo date={new Date(createAt)} formatter={formatter} />
        </Text>
      </Flex>
    </Flex>
  );
}
