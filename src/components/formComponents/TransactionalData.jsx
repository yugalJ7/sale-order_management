import { Input, Button, Flex, Box, Text } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TransactionalData = ({ onSubmit, register, handleSubmit }) => {
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Text mb={2} fontSize="md">
          Customer Id
        </Text>
        <Input
          required
          type="text"
          placeholder="Customer Id"
          {...register("customer_id")}
        />

        <Flex my={5} alignContent="center" gap={2}>
          <Text fontSize="md">Amount paid</Text>
          <input type="checkbox" placeholder="paid" {...register("paid")} />
        </Flex>
        {/* <Input type="checkbox" placeholder="paid" {...register("paid")} /> */}

        <Text mb={2} fontSize="md">
          Invoice Date
        </Text>
        <Input
          required
          type="datetime"
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
