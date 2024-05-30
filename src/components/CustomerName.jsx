import { Td } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

// This component find name of customer using id in sale order schema to render it in table
const CustomerName = ({ userIdFromOrder }) => {
  const { data: customerDetails } = useQuery({
    queryKey: ["customer"],
    queryFn: () =>
      fetch("http://localhost:4040/customerSchema").then((res) => res.json()),
  });

  const customer = customerDetails?.filter(
    (user) => user.customer === userIdFromOrder
  );

  return (
    <Td>
      {customer && customer.length > 0
        ? customer[0]?.customer_profile?.name
        : "Unknown"}
    </Td>
  );
};

export default CustomerName;
