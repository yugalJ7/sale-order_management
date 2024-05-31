import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Searchbar = () => {
  return (
    <Box w="90%" mt={5}>
      <FormControl>
        <FormLabel htmlFor="default-search" mb="2" textStyle="sm" srOnly>
          Search
        </FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none" height="100%">
            <SearchIcon color="gray.500" />
          </InputLeftElement>
          <Input
            type="search"
            id="default-search"
            placeholder="Search for product"
            required
            p="5"
            pl="10"
            fontSize="sm"
            backgroundColor="white"
            _focus={{
              ring: "1",
              ringColor: "#327695",
              borderColor: "#327695",
            }}
          />
          <InputRightElement>
            <Button
              type="submit"
              position="absolute"
              right="2.5"
              bottom={2.4}
              fontSize="sm"
              height="33px"
              // mb="1px"
              mt="1px"
              rounded="lg"
              color="white"
              backgroundColor="#327695"
              variant="solid"
              _hover={{ color: "#327695", bg: "#CBE0EA" }}
            >
              Search
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </Box>
  );
};

export default Searchbar;
