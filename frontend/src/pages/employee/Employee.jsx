import { Anchor, Breadcrumbs, Button, Group, Paper } from "@mantine/core";
import { IconAdjustments, IconPlus } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchBar } from "../attendance/components/SearchBar";
import { EmployeeTable } from "./components/EmployeeTable";

// const items = [
// {
//   title: "All employee",
//   href: "/employee",
// },
//   { title: "Add new employee", href: "#add-new-employee" },
//   { title: "Employee Name", href: "#employee-profile" },
// ];

export const Employee = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([
    {
      title: "All employee",
      href: "/employee",
    },
  ]);

  const breads = items.map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));

  return (
    <div className="w-full h-full flex flex-col flex-nowrap gap-8">
      <Paper className="flex flex-col flex-nowrap border-solid border border-slate-200 rounded-md p-4">
        <h1 className="font-bold text-3xl">All Employee</h1>
        <Breadcrumbs separator=">" separatorMargin="md" mt="xs">
          {breads}
        </Breadcrumbs>
      </Paper>
      <Paper className="flex flex-col flex-nowrap w-full h-full border-solid border border-slate-200 rounded-md p-4 gap-8">
        <div className="flex flex-row flex-nowrap">
          <div className="w-1/3">
            <SearchBar />
          </div>
          <div className="flex-grow" />
          <Group>
            <Button
              component="a"
              w={225}
              h={50}
              className="text-white bg-indigo-500 rounded-md"
              leftSection={<IconPlus />}
              onClick={() => {
                setItems((prev) => [
                  ...prev,
                  { title: "Add new employee", href: "/add-new-employee" },
                ]);
                navigate("add-new-employee");
              }}
            >
              Add New Employee
            </Button>
            <Button
              h={50}
              leftSection={<IconAdjustments />}
              className="text-black bg-white rounded-md border border-solid border-slate-300"
            >
              Filter
            </Button>
          </Group>
        </div>
        <EmployeeTable />
      </Paper>
    </div>
  );
};
