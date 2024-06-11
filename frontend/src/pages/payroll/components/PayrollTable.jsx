import { ActionIcon, Avatar, Group, Button } from "@mantine/core";
import {
  IconEdit,
  IconEye,
  IconEyeCheck,
  IconEyeEdit,
  IconTrash,
} from "@tabler/icons-react";
import { DataTable } from "mantine-datatable";

export const PayrollTable = () => {
  const elements = [
    {
      id: 1,
      name: "Nguyen Van A",
      ctc: "45000",
      salarypermonth: 3500,
      deduction: 0,
      status: true,
    },
    {
      id: 2,
      name: "Nguyen Van B",
      ctc: "50000",
      salarypermonth: 4000,
      deduction: 100,
      status: true,
    },
    {
      id: 3,
      name: "Nguyen Van C",
      ctc: "55000",
      salarypermonth: 4500,
      deduction: 200,
      status: true,
    },
    {
      id: 4,
      name: "Nguyen Van D",
      ctc: "60000",
      salarypermonth: 5000,
      deduction: 300,
      status: true,
    },
    {
      id: 5,
      name: "Nguyen Van E",
      ctc: "65000",
      salarypermonth: 5500,
      deduction: 400,
      status: true,
    },
    {
      id: 6,
      name: "Nguyen Van F",
      ctc: "70000",
      salarypermonth: 6000,
      deduction: 500,
      status: true,
    },
    {
      id: 7,
      name: "Nguyen Van G",
      ctc: "75000",
      salarypermonth: 6500,
      deduction: 600,
      status: true,
    },
    {
      id: 8,
      name: "Nguyen Van H",
      ctc: "80000",
      salarypermonth: 7000,
      deduction: 700,
      status: true,
    },
    {
      id: 9,
      name: "Nguyen Van I",
      ctc: "85000",
      salarypermonth: 7500,
      deduction: 800,
      status: true,
    },
    {
      id: 10,
      name: "Nguyen Van J",
      ctc: "90000",
      salarypermonth: 8000,
      deduction: 900,
      status: false,
    },
  ];

  const columns = [
    {
      accessor: "name",
      title: "Employee Name",
      render: (record) => {
        return (
          <div className="flex flex-row gap-2">
            <Avatar src="src/assets/Logo_Circle_FutureHRM.svg" />
            <span className="font-semibold">{record?.name || "-"}</span>
          </div>
        );
      },
    },
    {
      accessor: "ctc",
      title: "CTC",
    },
    {
      accessor: "salarypermonth",
      title: "Salary Per Month",
    },
    {
      accessor: "deduction",
      title: "Deduction",
    },
    {
      accessor: "status",
      title: "Status", //completed, pending
      render: (record) => {
        return (
          <div className="flex flex-row gap-2">
            <span className="font-semibold">{record?.status ? (
          <Button className="h-full w-fit px-4 border bg-green-300 bg-opacity-40 text-green-500">
            Completed
          </Button>
        ) : (
          <Button className="h-full w-fit px-4 border bg-yellow-300 bg-opacity-40 text-yellow-500">
            Pending
          </Button>
        )}</span>
          </div>
        );
      },
    },
    {
      accessor: "#",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <Group gap={4} justify="right" wrap="nowrap">
              <ActionIcon size="sm" variant="subtle" color="black">
                <IconEyeCheck size={16} />
              </ActionIcon>
              <ActionIcon size="sm" variant="subtle" color="black">
                <IconEdit size={16} />
              </ActionIcon>
              <ActionIcon size="sm" variant="subtle" color="black">
                <IconTrash size={16} />
              </ActionIcon>
            </Group>
          </>
        );
      },
    },
  ];
  return <DataTable columns={columns} records={elements} />;
};
