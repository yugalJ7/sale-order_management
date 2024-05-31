import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Radio,
  HStack,
  RadioGroup,
} from "@chakra-ui/react";

const TransactionalData = () => {
  return (
    <>
      <FormControl isRequired as="fieldset">
        <FormLabel>Customer ID</FormLabel>
        <Input type="text" />
      </FormControl>
      <FormControl as="fieldset">
        <FormLabel as="legend">Amount Paid</FormLabel>
        <RadioGroup defaultValue="Paid">
          <HStack spacing="24px">
            <Radio value="Paid">Paid</Radio>
            <Radio value="Later">Later</Radio>
          </HStack>
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default TransactionalData;
