import { IconAB2 } from "@tabler/icons-react";
import { IconCoin } from "@tabler/icons-react";
import { IconBrowserCheck } from "@tabler/icons-react";
import { IconUsersGroup } from "@tabler/icons-react";
import { IconDashboard } from "@tabler/icons-react";

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
];
