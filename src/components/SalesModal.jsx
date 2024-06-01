import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import React, { useState } from "react";
import { CloseIcon } from "@chakra-ui/icons";
import AllProducts from "./formComponents/AllProducts";
import Searchbar from "./formComponents/Searchbar";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import SelectedProduct from "./formComponents/SelectedProduct";
import TransactionalData from "./formComponents/TransactionalData";

const SalesModal = ({ setShowModal }) => {
  // Array which contain selected product from all product
  const [selectItems, setSelectItems] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // skuArray contain fetched sku details from selected product
  const skuArray = new Array();

  selectItems.map((product) => {
    console.log(skuArray);
    skuArray.push(product.sku);
  });

  const onSubmit = (data) => {
    // new property in form data which contain sku details
    data.items = skuArray;
    console.log(data);
    mutate(data);
    setShowModal(false);
  };

  // function to add new sales order in sales schema json file
  const { mutate } = useMutation({
    mutationFn: (newOrder) =>
      fetch("http://localhost:3030/saleOrderSchema", {
        method: "POST",
        body: JSON.stringify(newOrder),
      }).then((res) => res.json()),
  });

  const bg = useColorModeValue("#F4F9FB", "#1E4659");

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
        <Box height="50rem" overflowX="scroll" padding={5} bg={bg}>
          <Text fontSize="3xl">Sales Order Form</Text>
          <Searchbar />
          <Text mt={5} fontSize="xl">
            Selected Product
          </Text>
          <SelectedProduct selectItems={selectItems} />
          <Text mt={5} fontSize="xl">
            All Product
          </Text>
          <AllProducts
            selectItems={selectItems}
            setSelectItems={setSelectItems}
          />
          <Text my={5} fontSize="2xl">
            Transactional Details
          </Text>
          <TransactionalData
            handleSubmit={handleSubmit}
            register={register}
            onSubmit={onSubmit}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SalesModal;
