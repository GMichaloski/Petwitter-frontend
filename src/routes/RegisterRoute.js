import RegisterDesktop from "../components/Register/RegisterDesktop";
import RegisterMobile from "../components/Register/RegisterMobile";
import { Box } from "@chakra-ui/react";

function Register() {
  return (
    <Box>
      <Box display={["none", "flex"]}>
        <RegisterDesktop />
      </Box>
      <Box display={["flex", "none"]}>
        <RegisterMobile />
      </Box>
    </Box>
  );
}

export default Register;
