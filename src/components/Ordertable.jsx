import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
} from "@chakra-ui/react";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import CustomerName from "./CustomerName";
import SalesModal from "./SalesModal";
import { useState } from "react";

const Ordertable = ({ editModal, setEditModal }) => {
  const [singleProductInfo, setSingleProductInfo] = useState({});

  const { isPending, error, data } = useQuery({
    queryKey: ["salesOrder"],
    queryFn: () =>
      fetch("http://localhost:3030/saleOrderSchema").then((res) => res.json()),
    refetchInterval: 1000,
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const handleIconClick = (customerId) => {
    setEditModal(true);
    setSingleProductInfo(
      data.filter((data) => data.customer_id === customerId)
    );
  };

  return (
    <>
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
            {data?.map((order) => {
              return (
                <Tr key={order.id}>
                  <Td>{order.customer_id}</Td>
                  <CustomerName userIdFromOrder={order?.customer_id} />
                  <Td>{order?.items[0][0]?.selling_price}</Td>
                  <Td>{order.invoice_date}</Td>
                  <Td>
                    <PiDotsThreeOutlineFill
                      cursor="pointer"
                      onClick={() => handleIconClick(order.customer_id)}
                    />
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      {editModal && (
        <SalesModal
          editModal={editModal}
          setEditModal={setEditModal}
          singleProductInfo={singleProductInfo}
        />
      )}
    </>
  );
};

export default Ordertable;
