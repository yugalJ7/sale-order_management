import { Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { CloseIcon } from "@chakra-ui/icons";
import AllProducts from "./formComponents/AllProducts";
import Searchbar from "./formComponents/Searchbar";
import TransactionalData from "./formComponents/TransactionalData";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SalesModal = ({ setShowModal }) => {
  const [startDate, setStartDate] = useState(new Date());
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
      <Box w="50%" height="95%" display="flex" flexDirection="column" gap={4}>
        <CloseIcon
          placeSelf="end"
          onClick={() => setShowModal(false)}
          cursor="pointer"
        />
        <Box
          height="50rem"
          backgroundColor="#F1F7FA"
          overflowX="scroll"
          padding={5}
        >
          <Text fontSize="3xl">Sales Order Form</Text>
          <Searchbar />
          <Text mt={5} fontSize="xl">
            Selected Product
          </Text>
          <Text mt={5} fontSize="xl">
            All Product
          </Text>
          <AllProducts />
          <Text mt={5} fontSize="xl">
            Transactional Details
          </Text>
          <TransactionalData />
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SalesModal;
