import "./App.css";
import "@mantine/core/styles.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { Button, MantineProvider } from "@mantine/core";
import { Toaster } from "sonner";
import { toast } from "sonner";

function App() {
  return (
    <>
      <MantineProvider>
        <Toaster richColors/>
        <RouterProvider router={router} />
      </MantineProvider>
    </>
  );
}

export default App;
