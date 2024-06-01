import React from "react";
import { Text, Box, Grid, Checkbox } from "@chakra-ui/react";

const SelectedProduct = ({ selectItems }) => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6} mt={5}>
      {selectItems.map((data) => {
        return (
          <Box key={data.id}>
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

export default SelectedProduct;
