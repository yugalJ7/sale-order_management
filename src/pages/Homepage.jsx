import { useState } from "react";
import Ordertable from "../components/Ordertable";
import Topbar from "../components/Topbar";
import { Flex } from "@chakra-ui/react";

const Homepage = () => {
  const [createModal, setCreateModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  return (
    <>
      <Flex
        flexDirection="column"
        width="100%"
        alignItems="center"
        justifyContent="center"
        gap={7}
      >
        <Topbar createModal={createModal} setCreateModal={setCreateModal} />
        <Ordertable editModal={editModal} setEditModal={setEditModal} />
      </Flex>
    </>
  );
};

export default Homepage;
