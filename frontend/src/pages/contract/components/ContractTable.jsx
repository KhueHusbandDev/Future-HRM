import { ActionIcon, Avatar, Group, Button } from "@mantine/core";
import {
  IconEdit,
  IconEye,
  IconEyeCheck,
  IconEyeEdit,
  IconTrash,
} from "@tabler/icons-react";
import { DataTable } from "mantine-datatable";

export const ContractTable = () => {
  const elements = [
    {
      id: 1,
      staff_if: 1,
      name: "Nguyen Van A",
      contract_started_date: "2022-01-01",
      contract_ended_date: "2022-12-31",
      contract_stop_date: "2022-12-31",
      based_salary: 2000,
    },
    {
      id: 2,
      staff_if: 2,
      name: "Nguyen Van B",
      contract_started_date: "2022-02-01",
      contract_ended_date: "2022-12-31",
      contract_stop_date: "2022-12-31",
      based_salary: 2000,
    },
    {
      id: 3,
      staff_if: 3,
      name: "Nguyen Van C",
      contract_started_date: "2022-03-01",
      contract_ended_date: "2022-12-31",
      contract_stop_date: "2000-12-31",
      based_salary: 2000,
    },
    {
      id: 4,
      staff_if: 4,
      name: "Nguyen Van D",
      contract_started_date: "2022-04-01",
      contract_ended_date: "2022-12-31",
      contract_stop_date: "2022-12-31",
      based_salary: 2000,
    },
    {
      id: 5,
      staff_if: 5,
      name: "Nguyen Van E",
      contract_started_date: "2022-05-01",
      contract_ended_date: "2022-12-31",
      contract_stop_date: "2022-12-31",
      based_salary: 2000,
    },
    {
      id: 6,
      staff_if: 6,
      name: "Nguyen Van F",
      contract_started_date: "2022-06-01",
      contract_ended_date: "2022-12-31",
      contract_stop_date: "2022-12-31",
      based_salary: 2000,
      status: true,
    },
    {
      id: 7,
      staff_if: 7,
      name: "Nguyen Van G",
      contract_started_date: "2022-07-01",
      contract_ended_date: "2022-12-31",
      contract_stop_date: "2022-12-31",
      based_salary: 2000,
    },
    {
      id: 8,
      staff_if: 8,
      name: "Nguyen Van H",
      contract_started_date: "2022-08-01",
      contract_ended_date: "2022-12-31",
      contract_stop_date: "2022-12-31",
      based_salary: 2000,
    },
    {
      id: 9,
      staff_if: 9,
      name: "Nguyen Van I",
      contract_started_date: "2022-09-01",
      contract_ended_date: "2022-12-31",
      contract_stop_date: "2022-12-31",
      based_salary: 2000,
    },
    {
      id: 10,
      staff_if: 10,
      name: "Nguyen Van J",
      contract_started_date: "2022-10-01",
      contract_ended_date: "2022-12-31",
      contract_stop_date: "2022-12-31",
      based_salary: 2000,
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
      accessor: "staff_if",
      title: "Employee ID",
    },
    {
      accessor: "contract_started_date",
      title: "Start",
    },
    {
      accessor: "contract_ended_date",
      title: "End",
    },
    {
        accessor: "contract_stop_date",
        title: "Stop",
    },
    {
        accessor: "based_salary",
        title: "Based Salary",
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
