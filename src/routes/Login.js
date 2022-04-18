import LoginMobile from "../components/Login/LoginMobile";
import LoginDesktop from "../components/Login/LoginDesktop";
import { Box } from "@chakra-ui/react";

function Login() {
  return (
    <Box>
      <Box display={["none", "flex"]}>
        <LoginDesktop />
      </Box>
      <Box display={["flex", "none"]}>
        <LoginMobile />
      </Box>
    </Box>
  );
}

export default Login;
