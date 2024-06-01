import Homepage from "./pages/Homepage";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";

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
