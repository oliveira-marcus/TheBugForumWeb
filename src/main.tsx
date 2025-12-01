import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter} from "react-router";
import { AuthProvider } from "./contexts/AuthContext.tsx";
import AllRoutes from "./routes/AllRoutes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
