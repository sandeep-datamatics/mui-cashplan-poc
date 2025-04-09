import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ElementLoginScreen } from "./screens/ElementLoginScreen";
import { ThemeProvider } from "./theme/ThemeProvider";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ThemeProvider>
      <ElementLoginScreen />
    </ThemeProvider>
  </StrictMode>,
);
