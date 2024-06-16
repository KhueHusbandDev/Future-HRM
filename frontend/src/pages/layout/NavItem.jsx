import {
  IconAB2,
  IconBrowserCheck,
  IconCoin,
  IconDashboard,
  IconList,
  IconPlaneDeparture,
  IconUsersGroup,
  IconBriefcase,
  IconCircleLetterC,
} from "@tabler/icons-react";

export const navItems = [
  {
    label: "Dashboard",
    ref: "/dashboard",
    icon: <IconDashboard size={24} />,
  },
  {
    label: "All Employees",
    ref: "/employee",
    icon: <IconUsersGroup size={24} />,
  },
  {
    label: "All department",
    ref: "/department",
    icon: <IconAB2 size={24} />,
  },
  {
    label: "Attendance",
    ref: "/attendance",
    icon: <IconBrowserCheck size={24} />,
  },
  {
    label: "Contracts",
    ref: "/contracts",
    icon: <IconCircleLetterC size={24} />,
  },
  {
    label: "Payroll",
    ref: "/payroll",
    icon: <IconCoin size={24} />,
  },
  {
    label: "Leaves",
    ref: "/leaves",
    icon: <IconList size={24} />,
  },
  {
    label: "Holidays",
    ref: "/holidays",
    icon: <IconPlaneDeparture size={24} />,
  },
];
