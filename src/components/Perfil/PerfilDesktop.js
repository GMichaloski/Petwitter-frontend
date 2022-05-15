import { Flex } from "@chakra-ui/react";
import React from "react";
import BarraLateralBranca from "../BarraLateralBranca";
import CardPerfilDesktop from "../CardPerfilDesktop";
import LateralMenu from "../LateralMenu";
import SpecificTimeline from "../SpecificTimeline";

export default function PerfilDesktop() {
  return (
    <Flex flexDir="row">
      <LateralMenu home={false} />
      <Flex flexDir="column">
        <CardPerfilDesktop />
        <SpecificTimeline petweetWidth="54vw" />
      </Flex>
      <BarraLateralBranca />
    </Flex>
  );
}
