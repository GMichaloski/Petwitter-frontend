import HomeDesktop from "../components/Home/HomeDesktop";
import HomeMobile from "../components/Home/HomeMobile";
import { Box } from "@chakra-ui/react";

function Home() {
  return (
    <Box>
      <Box display={["none", "flex"]}>
        <HomeDesktop />
      </Box>
      <Box display={["flex", "none"]}>
        <HomeMobile />
      </Box>
    </Box>
  );
}

export default Home;
