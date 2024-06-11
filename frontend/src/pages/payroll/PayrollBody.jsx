import { Button, Group, Paper } from "@mantine/core";
import { IconAdjustments, IconPlus, IconTableExport } from "@tabler/icons-react";
import { SearchBar } from "../attendance/components/SearchBar";
import { PayrollTable } from "./components/PayrollTable";

export const PayrollBody = () => {
  return (
    <>
      <Paper className="flex flex-col flex-nowrap w-full h-full border-solid border border-slate-200 rounded-md p-4 gap-8">
        <div className="flex flex-row flex-nowrap">
          <div className="w-1/3">
            <SearchBar />
          </div>
          <div className="flex-grow" />
          <Group>
            <Button
              w={'fit-content'}
              h={'40'}
              className="text-gray-300 bg-indigo-500 rounded-md"
              leftSection={<IconTableExport />}
            >
              Export
            </Button>
          </Group>
        </div>
        <PayrollTable />
      </Paper>
    </>
  );
};
