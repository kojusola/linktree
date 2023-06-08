import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WalletContextProvider } from "./contexts";
import LinksComponent from "./pages/LinksComponent";
import "@rainbow-me/rainbowkit/styles.css";
import CreateLinktree from "./pages/CreateLinktree";
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
