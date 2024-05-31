import { useColorMode, Button } from "@chakra-ui/react";

export default function ThemeToggler() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Button position="fixed" bottom={5} right={5} onClick={toggleColorMode}>
        {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </header>
  );
}
