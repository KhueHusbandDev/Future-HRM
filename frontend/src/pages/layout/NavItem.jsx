import {
  IconAB2,
  IconBrowserCheck,
  IconCoin,
  IconDashboard,
  IconList,
  IconPlaneDeparture,
  IconUsersGroup,
} from "@tabler/icons-react";

export const navItems = [
  {
    label: "Dashboard",
    ref: "/dashboard",
    icon: <IconDashboard size={28} />,
  },
  {
    label: "All Employees",
    ref: "/employee",
    icon: <IconUsersGroup size={28} />,
  },
  {
    label: "All department",
    ref: "/department",
    icon: <IconAB2 size={28} />,
  },
  {
    label: "Attendance",
    ref: "/attendance",
    icon: <IconBrowserCheck size={28} />,
  },
  {
    label: "Payroll",
    ref: "/payroll",
    icon: <IconCoin size={28} />,
  },
  {
    label: "Leaves",
    ref: "/leaves",
    icon: <IconList size={28} />,
  },
  {
    label: "Holidays",
    ref: "/holidays",
    icon: <IconPlaneDeparture size={28} />,
  },
];
