import { Flex } from "@chakra-ui/react";
import React from "react";
import LateralMenu from "../LateralMenu";

export default function PerfilDesktop() {
  return (
    <Flex>
      <LateralMenu home={false} />
    </Flex>
  );
}
