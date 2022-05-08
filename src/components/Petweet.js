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
  const { name, username } = user;
  const formatter = buildFormatter(ptBrStrings);

  return (
    <Flex flexDir="row" boxShadow="0px 2px 0px rgba(33, 33, 33, 0.2)">
      <Flex marginLeft="20px" marginTop="16px">
        <Image src={Niko} boxSize="40px" marginRight="16px" />
        <Flex flexDir="column">
          <Flex flexDir="row">
            <Link to={`/profile/${userId}`}>
              <Text
                fontWeight="700"
                fontSize="15px"
                lineHeight="20.43px"
                color="#000000"
                wordBreak="break-word"
                marginRight="4px"
              >
                {name}
              </Text>
            </Link>
            <Text
              fontWeight="400"
              fontSize="15px"
              lineHeight="20.43px"
              color="#828282"
              wordBreak="break-word"
              marginRight="4px"
            >
              {`@${username}`}
            </Text>
            <Text
              fontWeight="400"
              fontSize="15px"
              lineHeight="20.43px"
              color="#828282"
              wordBreak="break-word"
              marginRight="4px"
            >
              •
            </Text>
            <Text
              fontWeight="400"
              fontSize="15px"
              lineHeight="20.43px"
              color="#828282"
              wordBreak="break-word"
              marginRight="4px"
            >
              <TimeAgo date={new Date(createAt)} formatter={formatter} />
            </Text>
          </Flex>
          <Text
            fontSize="15px"
            fontWeight="400"
            lineHeight="22px"
            wordBreak="break-word"
            color="#333333"
            marginBottom="11px"
          >
            {content}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
