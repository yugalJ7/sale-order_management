import { Input, Button, Flex, Box, Text } from "@chakra-ui/react";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TransactionalData = ({
  onSubmit,
  register,
  handleSubmit,
  editModal,
  singleProductInfo,
}) => {
  // console.log(singleProductInfo);
  // console.log(singleProductInfo && singleProductInfo[0]?.customer_id);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Text mb={2} fontSize="md">
          Customer Id
        </Text>
        <Input
          required
          type="text"
          name="customeId"
          defaultValue={
            editModal
              ? singleProductInfo && singleProductInfo[0]?.customer_id
              : ""
          }
          placeholder="Customer Id"
          {...register("customer_id")}
        />
        <Flex my={5} alignContent="center" gap={2}>
          <Text fontSize="md">Amount paid</Text>
          <input
            defaultChecked
            type="checkbox"
            name="paid"
            placeholder="paid"
            {...register("paid")}
          />
        </Flex>
        <Text mb={2} fontSize="md">
          Invoice Date
        </Text>
        <Input
          required
          type="date"
          name="invoice_date"
          defaultValue={
            editModal
              ? singleProductInfo && singleProductInfo[0]?.invoice_date
              : ""
          }
          placeholder="Invoice Date"
          {...register("invoice_date")}
        />
        <Box mt={5} display="flex" alignItems="center" justifyContent="center">
          <Button
            type="submit"
            color="white"
            backgroundColor="#327695"
            variant="solid"
            _hover={{ color: "#327695", bg: "#CBE0EA" }}
          >
            Submit
          </Button>
        </Box>
      </form>
    </>
  );
};

export default TransactionalData;
