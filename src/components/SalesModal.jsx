import { Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { CloseIcon } from "@chakra-ui/icons";
import AllProducts from "./formComponents/AllProducts";
import Searchbar from "./formComponents/Searchbar";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import SelectedProduct from "./formComponents/SelectedProduct";

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
        <Box height="50rem" overflowX="scroll" padding={5}>
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
          <Text mt={5} fontSize="xl">
            Transactional Details
          </Text>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="First Name"
              {...register("customer_id")}
            />
            <hr />
            <p>Paid</p>
            <input type="checkbox" placeholder="paid" {...register("paid")} />
            <hr />
            <input
              type="datetime"
              placeholder="Invoice Date"
              {...register("invoice_date")}
            />
            <input type="submit" />
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default SalesModal;
