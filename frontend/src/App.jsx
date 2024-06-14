import "@mantine/core/styles.css";
import "@mantine/dropzone/styles.css";
import { MantineProvider } from "@mantine/core";
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
