import { ActionIcon, Avatar, Group } from "@mantine/core";
import {
  IconEdit,
  IconEye,
  IconEyeCheck,
  IconEyeEdit,
  IconTrash,
} from "@tabler/icons-react";
import { DataTable } from "mantine-datatable";

export const DepartmentTable = ({ departments }) => {

  console.log('Departments Data:', departments);
  const columns = [
    {
      accessor: "id",
      title: "ID",
    },
    {
      accessor: "name",
      title: "Department Name",
    },
    {
      accessor: "nameVn",
      title: "Vietnamese Name",
    },
    {
      accessor: "del",
      title: "Status",
      render: (record) => (record.del ? "Active" : "Inactive"),
    },
    {
      accessor: "#",
      title: "Actions",
      render: (record) => {
        return (
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
        );
      },
    },
  ];

  return <DataTable columns={columns} records={departments} />;
};
