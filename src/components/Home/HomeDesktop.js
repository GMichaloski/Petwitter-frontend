import { Flex } from "@chakra-ui/react";
import React from "react";
import BarraLateralBranca from "../BarraLateralBranca";
import LateralMenu from "../LateralMenu";
import PostBox from "../PostBox";

export default function HomeDesktop() {
  return (
    <Flex flexDir="row">
      <LateralMenu home={true} />
      <PostBox />
      <BarraLateralBranca />
    </Flex>
  );
}
