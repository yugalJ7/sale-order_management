import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Grid,
} from "@chakra-ui/react";

const SelectedProduct = ({ selectItems }) => {
  return (
    <Accordion defaultIndex={[0]} mt={5} allowMultiple>
      {selectItems.map((data) => {
        return (
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  {data.name}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default SelectedProduct;
