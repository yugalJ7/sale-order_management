import { Text, Box, Grid, Checkbox } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

const AllProducts = ({ selectItems, setSelectItems }) => {
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch("http://localhost:5070/productSchema").then((res) => res.json()),
  });

  const handleCheck = (product) => {
    setSelectItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(product)) {
        return prevSelectedItems.filter(
          (selectedItem) => selectedItem !== product
        );
      } else {
        return [...prevSelectedItems, product];
      }
    });
  };

  console.log(selectItems);
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6} mt={5}>
      {products?.map((data) => {
        return (
          <Box
            key={data.id}
            // backgroundColor="white"
          >
            <Checkbox
              size="md"
              colorScheme="green"
              onChange={() => handleCheck(data)}
            ></Checkbox>
            <Text>{data.name}</Text>
            <Text>{data.category}</Text>
            <Text>{data.features}</Text>
            <Text>{data.characteristics}</Text>
          </Box>
        );
      })}
    </Grid>
  );
};

export default AllProducts;
