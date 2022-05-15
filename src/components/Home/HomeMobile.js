import React from "react";
import Header from "../../components/Header";
import PostButton from "../../components/PostButton";
import { Flex } from "@chakra-ui/react";
import Timeline from "../Timeline";

export default function HomeMobile() {
  return (
    <Flex flexDir="column" width="100vw">
      <Header home={true} />
      <Timeline petweetWidth="" />
      <PostButton />
    </Flex>
  );
}
