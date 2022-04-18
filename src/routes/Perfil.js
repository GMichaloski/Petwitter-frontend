import React from "react";
import PerfilDesktop from "../components/Perfil/PerfilDesktop";
import PerfilMobile from "../components/Perfil/PerfilMobile";
import { Box } from "@chakra-ui/react";

export default function Perfil() {
  return (
    <Box>
      <Box display={["none", "flex"]}>
        <PerfilDesktop />
      </Box>
      <Box display={["flex", "none"]}>
        <PerfilMobile />
      </Box>
    </Box>
  );
}
