import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { WalletContextProvider } from "./contexts";
import "@rainbow-me/rainbowkit/styles.css";
import { ChakraProvider } from "@chakra-ui/react";

import ToggleThemeMode from "./ToggleThemeMode";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "linktree/:id",
//     element: <LinksComponent />,
//   },
//   {
//     path: "createlinktree",
//     element: <CreateLinktree />,
//   },
// ]);

ReactDOM.render(
  <React.StrictMode>
    <WalletContextProvider>
      <ChakraProvider>
        <ToggleThemeMode />
        <App />
      </ChakraProvider>
    </WalletContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
