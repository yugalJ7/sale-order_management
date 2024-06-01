import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ThemeToggler from "./components/ThemeToggler.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
const queryClient = new QueryClient();

const { VITE_CLERK_PUBLISHABLE_KEY } = import.meta.env;

const PUBLISHABLE_KEY = VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <App />
        <ThemeToggler />
      </ChakraProvider>
    </QueryClientProvider>
  </ClerkProvider>
);
