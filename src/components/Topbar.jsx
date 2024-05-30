import React, { useState } from "react";
import { Flex, Button, Box, Text } from "@chakra-ui/react";
import SalesModal from "./SalesModal";

const Topbar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Flex width="90%" mt={4} justifyContent="space-between">
        <Text fontSize="3xl">Sale Order Management</Text>
        <Text>Monkey D. Luffy</Text>
      </Flex>

      <Flex justifyContent="space-between" width="90%">
        <Box>
          <Button color="#327695" variant="outline" _hover={{ bg: "#CBE0EA" }}>
            Active Sale Orders
          </Button>
          <Button
            color="#327695"
            variant="outline"
            ml={3}
            _hover={{ bg: "#CBE0EA" }}
          >
            Completed Sale Orders
          </Button>
        </Box>

        <Button
          color="white"
          backgroundColor="#327695"
          variant="solid"
          _hover={{ color: "#327695", bg: "#CBE0EA" }}
          onClick={() => setShowModal(true)}
        >
          + Sales Orders
        </Button>
      </Flex>
      {showModal && <SalesModal setShowModal={setShowModal} />}
    </>
  );
};

export default Topbar;
