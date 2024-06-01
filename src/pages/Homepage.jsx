import Ordertable from "../components/Ordertable";
import Topbar from "../components/Topbar";
import { Flex } from "@chakra-ui/react";

const Homepage = () => {
  return (
    <>
      <Flex
        flexDirection="column"
        width="100%"
        alignItems="center"
        justifyContent="center"
        gap={7}
      >
        <Topbar />
        <Ordertable />
      </Flex>
    </>
  );
};

export default Homepage;
