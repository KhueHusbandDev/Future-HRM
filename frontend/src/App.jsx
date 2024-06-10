import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import "./App.css";
import { router } from "./routes/routes";

function App() {
  return (
    <>
      <MantineProvider>
        <Toaster richColors />
        <RouterProvider router={router} />
      </MantineProvider>
    </>
  );
}

export default App;
