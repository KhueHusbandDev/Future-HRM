import { Outlet, createBrowserRouter } from "react-router-dom";
import { AttendanceBody } from "../pages/attendance/AttendanceBody";
import { ContractBody } from "../pages/contract/ContractBody";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { Employee } from "../pages/employee/Employee";
import MainLayout from "../pages/layout/MainLayout";
import { PayrollBody } from "../pages/payroll/PayrollBody";

// import { ContractBody } from "../pages/contract/ContractBody";


import { Department } from "../pages/department/Department";
import { Holidays } from "../pages/holidays/Holidays";
import { Notifications } from "../pages/employee/Notifications";
//  import { ViewDepartment, Viewdepartment } from "../pages/department/ViewDepartment";
//  import { Link } from 'react-router-dom';

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

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/viewdepartment" element={<ViewDepartment />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
