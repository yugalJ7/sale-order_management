import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import {
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

import { ChakraProvider } from "@chakra-ui/react";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Homepage />,
//   },
// ]);

function App() {
  return (
    <>
      <header>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
        <SignedIn>
          <Homepage />
        </SignedIn>
      </header>
    </>
  );
}

export default App;
