import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { StoreProvider } from "./hooks/useGlobalReducer";

const Main = () => (
  <React.StrictMode>
    <StoreProvider>
      <RouterProvider router={router} />
    </StoreProvider>
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
