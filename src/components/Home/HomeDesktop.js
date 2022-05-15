import { Flex } from "@chakra-ui/react";
import React from "react";
import BarraLateralBranca from "../BarraLateralBranca";
import LateralMenu from "../LateralMenu";
import PostBox from "../PostBox";
import Timeline from "../Timeline";

export default function HomeDesktop() {
  return (
    <Flex flexDir="row">
      <LateralMenu home={true} />
      <Flex flexDir="column">
        <PostBox />
        <Timeline petweetWidth="54vw" />
      </Flex>
      <BarraLateralBranca />
    </Flex>
  );
}
