import { Text, Box, Grid, Checkbox } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

const AllProducts = () => {
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch("http://localhost:5070/productSchema").then((res) => res.json()),
  });

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6} mt={5}>
      {products?.map((data) => {
        return (
          <Box
            key={data.id}
            // backgroundColor="white"
          >
            <Checkbox size="md" colorScheme="green"></Checkbox>
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
