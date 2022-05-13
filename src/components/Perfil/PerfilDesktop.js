import { Flex } from "@chakra-ui/react";
import React from "react";
import BarraLateralBranca from "../BarraLateralBranca";
import LateralMenu from "../LateralMenu";
import PostBox from "../PostBox";
import SpecificTimeline from "../SpecificTimeline";

export default function PerfilDesktop() {
  return (
    <Flex flexDir="row">
      <LateralMenu home={false} />
      <Flex flexDir="column">
        <PostBox />
        <SpecificTimeline />
      </Flex>
      <BarraLateralBranca />
    </Flex>
  );
}
