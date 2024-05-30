import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Center,
  Flex,
} from "@chakra-ui/react";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { MdOutlineCurrencyRupee } from "react-icons/md";

const Ordertable = () => {
  return (
    <TableContainer boxShadow="sm" width="90%" mt={4}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Customer Name</Th>
            <Th>
              <Flex alignItems="center" gap={1}>
                Price
                <MdOutlineCurrencyRupee />
              </Flex>
            </Th>
            <Th>Last Modified</Th>
            <Th>Edit/View</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>1</Td>
            <Td>millimetres</Td>
            <Td>25.4</Td>
            <Td>25/4/2023</Td>
            <Td>
              <PiDotsThreeOutlineFill />
            </Td>
          </Tr>
          <Tr>
            <Td>2</Td>
            <Td>centimetre</Td>
            <Td>30.48</Td>
            <Td>25/4/2023</Td>
            <Td>
              <PiDotsThreeOutlineFill />
            </Td>
          </Tr>
          <Tr>
            <Td>3</Td>
            <Td>metres</Td>
            <Td>0.91444</Td>
            <Td>25/4/2023</Td>
            <Td>
              <PiDotsThreeOutlineFill />
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Ordertable;
