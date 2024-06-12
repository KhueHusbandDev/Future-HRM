import { createBrowserRouter } from "react-router-dom";
import { AttendanceBody } from "../pages/attendance/AttendanceBody";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { MainLayout } from "../pages/layout/MainLayout";
import { Employee } from "../pages/employee/Employee";
import { PayrollBody } from "../pages/payroll/PayrollBody";
import { ContractBody } from "../pages/contract/ContractBody";
import { AddEmployee } from "../pages/employee/AddEmployee";

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
      { path: "payroll", element: <PayrollBody /> },
      { path: "holidays", element: <AttendanceBody /> },
      { path: "employee", element: <Employee /> },
      { path: "employee/add", element: <AddEmployee />},
      { path: "leaves", element: <AttendanceBody /> },
      {path:"contracts",element:<ContractBody/>},
      { path: "login", element: <h2>You are not Login</h2> },
    ],
  },
]);
