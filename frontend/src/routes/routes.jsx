import { Outlet, createBrowserRouter } from "react-router-dom";
import { AttendanceBody } from "../pages/attendance/AttendanceBody";
import { ContractBody } from "../pages/contract/ContractBody";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { Employee } from "../pages/employee/Employee";
import MainLayout from "../pages/layout/MainLayout";
import { PayrollBody } from "../pages/payroll/PayrollBody";
import { Department } from "../pages/department/Department";
import { Holidays } from "../pages/holidays/Holidays";
import { Notifications } from "../pages/employee/Notifications";
import { AddDepartment } from "../pages/department/components/AddDepartment";
//  import { Link } from 'react-router-dom';
import { UpdateDepartment } from "../pages/department/components/UpdateDepartment";
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
      { index: true, path: "dashboard", element: <Dashboard /> },
      { path: "attendance", element: <AttendanceBody /> },
      { path: "department", element: <Department /> },
      { path: "department/add", element: <AddDepartment /> },
      { path: "department/update", element: <UpdateDepartment /> },

      {
        path: "department",
        element: (
          <>
            <Outlet />
          </>
        ),
        children: [
          {
            index: true,
            element: <Department />,
          },
          {
            path: "add-new-department",
            element: <AddDepartment />,
          },
          {
            path: "update-department",
            element: <UpdateDepartment />,
          },
        ],
      },
     
     

      { path: "payroll", element: <PayrollBody /> },
      { path: "holidays", element: <Holidays /> },
      { path: "employee", element: <Employee /> },
      { path: "employee/add", element: <AddEmployee /> },
      { path: "holidays", element: <AttendanceBody /> },
      {
        path: "employee",
        element: (
          <>
            <Outlet />
          </>
        ),
        children: [
          {
            index: true,
            element: <Employee />,
          },
          {
            path: "add-new-employee",
            element: <AddEmployee />,
          },
        ],
      },

      { path: "leaves", element: <AttendanceBody /> },
      { path:"contracts",element:<ContractBody/>},
      { path: "employee/notifications", element: <Notifications/>},
      { path: "contracts", element: <ContractBody /> },
      { path: "login", element: <h2>You are not Login</h2> },
    ],
  },
]);


