import React, { useState } from "react";
import { Flex, Button, Box, Text } from "@chakra-ui/react";
import SalesModal from "./SalesModal";
import { UserButton, useClerk } from "@clerk/clerk-react";

const Topbar = ({ createModal, setCreateModal }) => {
  const { user } = useClerk();

  return (
    <>
      <Flex width="90%" mt={4} justifyContent="space-between">
        <Text fontSize="3xl">Sale Order Management</Text>
        <Flex alignItems="center" gap={2}>
          <UserButton />
          <Text>{user.fullName ? user.fullName : "User"}</Text>
        </Flex>
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
          onClick={() => setCreateModal(true)}
        >
          + Sales Orders
        </Button>
      </Flex>
      {createModal && (
        <SalesModal createModal={createModal} setCreateModal={setCreateModal} />
      )}
    </>
  );
};

export default Topbar;
