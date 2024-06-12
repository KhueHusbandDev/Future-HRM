import { Button, Group, Paper } from "@mantine/core";
import { IconAdjustments, IconPlus } from "@tabler/icons-react";
import { SearchBar } from "../attendance/components/SearchBar";
import { DepartmentTable } from "./components/DepartmentTable";

export const Department = () => {
  return (
    <>
      <Paper className="flex flex-col flex-nowrap w-full h-full border-solid border border-slate-200 rounded-md p-4 gap-8">
        {/* <div className="w-1/2 flex align-middle items-center">
          <div className="block">
            <b className="text-md">Attendance</b>
            <br />
            <span className="text-sm">All Employee Attendance</span>
          </div>
        </div> */}
        <div className="flex flex-row flex-nowrap">
          <div className="w-1/3">
            <SearchBar />
          </div>
          <div className="flex-grow" />
          <Group>
            <Button
              w={225}
              h={50}
              className="text-white bg-indigo-500 rounded-md"
              leftSection={<IconPlus />}
            >
              Add New Department
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
        <DepartmentTable />
      </Paper>
    </>
  );
};