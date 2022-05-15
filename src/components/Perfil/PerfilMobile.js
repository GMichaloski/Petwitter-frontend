import React from "react";
import Header from "../../components/Header";
import PostButton from "../../components/PostButton";
import { Flex } from "@chakra-ui/react";
import SpecificTimeline from "../SpecificTimeline";
import CardPerfil from "../CardPerfil";

export default function PerfilMobile() {
  return (
    <Flex flexDir="column" width="100vw">
      <Header home={false} />
      <CardPerfil />
      <SpecificTimeline petweetWidth="" />
      <PostButton />
    </Flex>
  );
}
