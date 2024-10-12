import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ContextProvider } from "./context/ContextProvider.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies/">
      <ContextProvider>
        <App />
      </ContextProvider>
    </BrowserRouter>
  </StrictMode>
);
