import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Radio,
  HStack,
  RadioGroup,
  Button,
} from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TransactionalData = ({
  formData,
  handleChange,
  setFormData,
  startDate,
  setStartDate,
  handleSubmit,
}) => {
  return (
    <>
      <FormControl isRequired>
        <FormLabel>Customer ID</FormLabel>
        <Input
          value={formData.customerId}
          name="customerId"
          onChange={handleChange}
        />
      </FormControl>
      <FormControl as="fieldset">
        <FormLabel as="legend">Amount Paid</FormLabel>
        <RadioGroup defaultValue="true" name="paid" onChange={handleChange}>
          <HStack spacing="24px">
            <Radio value="true">Paid</Radio>
            <Radio value="false">Later</Radio>
          </HStack>
        </RadioGroup>
      </FormControl>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      <Button
        mt={4}
        color="white"
        backgroundColor="#327695"
        variant="solid"
        _hover={{ color: "#327695", bg: "#CBE0EA" }}
        onChange={handleSubmit}
        type="submit"
      >
        Submit
      </Button>
    </>
  );
};

export default TransactionalData;
