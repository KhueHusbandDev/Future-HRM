import { Button, Group, Paper } from "@mantine/core";
import { IconPlus, IconCirclePlus } from "@tabler/icons-react";
import { SearchBar } from "../attendance/components/SearchBar";
import { ContractTable } from "./components/ContractTable";

export const ContractBody = () => {
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
              className="text-gray-200 bg-indigo-500 rounded-md"
              leftSection={<IconCirclePlus />}
            >
              Add New Contract
            </Button>
          </Group>
        </div>
        <ContractTable />
      </Paper>
    </>
  );
};
