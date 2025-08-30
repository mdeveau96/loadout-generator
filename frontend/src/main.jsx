import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import "./index.css";
import App from "./App.jsx";

// Create a simpler theme first to see if the app renders
const theme = createTheme({
  colors: {
    brand: [
      "#e6fcf5",
      "#c3f8e9",
      "#9cf0d9",
      "#72e5c7",
      "#4ed8b4",
      "#30c4a8",
      "#27a391",
      "#20827a",
      "#1b6462",
      "#17484a",
    ],
  },
  primaryColor: "brand",
  fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="auto">
      <App />
    </MantineProvider>
  </StrictMode>
);
