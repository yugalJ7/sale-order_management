import { Box } from "@chakra-ui/react";
import React from "react";
import { CloseIcon } from "@chakra-ui/icons";

const SalesModal = ({ setShowModal }) => {
  return (
    <Box
      position="fixed"
      inset={0}
      backdropFilter="auto"
      backdropBlur="3px"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box w="50%" display="flex" flexDirection="column" gap={4}>
        <CloseIcon
          placeSelf="end"
          onClick={() => setShowModal(false)}
          cursor="pointer"
        />
        <Box height={100} backgroundColor="#F1F7FA">
          <p>Order</p>
        </Box>
      </Box>
    </Box>
  );
};

export default SalesModal;
