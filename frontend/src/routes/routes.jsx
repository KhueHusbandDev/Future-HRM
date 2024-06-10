import { createBrowserRouter } from "react-router-dom";
import { AttendanceBody } from "../pages/attendance/AttendanceBody";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { MainLayout } from "../pages/layout/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <MainLayout />
      </>
    ),
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "attendance", element: <AttendanceBody /> },
      { path: "department", element: <AttendanceBody /> },
      { path: "payroll", element: <AttendanceBody /> },
      { path: "holidays", element: <AttendanceBody /> },
      { path: "employee", element: <AttendanceBody /> },
      { path: "leaves", element: <AttendanceBody /> },
      {path: "login", element: <h2>You are not Login</h2>}
    ],
  },
]);
