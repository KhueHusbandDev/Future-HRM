import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../pages/layout/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <MainLayout />
      </>
    ),
    children: [{ path: "dashboard", element: <h1>This is dashboard</h1> }],
  },
]);