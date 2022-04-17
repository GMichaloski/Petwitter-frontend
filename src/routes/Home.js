import Header from "../components/Header";
import PostButton from "../components/PostButton";
import { Flex } from "@chakra-ui/react";
function Home() {
  return (
    <Flex flexDir="column">
      <Header />
      <PostButton />
    </Flex>
  );
}

export default Home;
