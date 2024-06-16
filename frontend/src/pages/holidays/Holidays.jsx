import { Button, Group, Paper } from "@mantine/core";
import { IconAdjustments, IconPlus } from "@tabler/icons-react";
import { SearchBar } from "./components/SearchBar";
import { HolidaysTable } from "./components/HolidaysTable";

export const Holidays = () => {
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
              w={225}
              h={50}
              className="text-white bg-indigo-500 rounded-md"
              leftSection={<IconPlus />}
            >
              Add New Holiday
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
        <HolidaysTable />
      </Paper>
    </>
  );
};
