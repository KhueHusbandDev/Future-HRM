import { ActionIcon, Avatar, Group } from "@mantine/core";
import {
  IconEdit,
  IconEye,
  IconEyeCheck,
  IconEyeEdit,
  IconTrash,
} from "@tabler/icons-react";
import { DataTable } from "mantine-datatable";

export const ViewDepartmentTable = () => {
  const elements = [
    {
      id: 1,
      name: "Nguyen Van A",
      designation: "CEO",
      type: "Office",
      checkInTime: "12:00 AM",
      status: true,
    },
    {
      id: 2,
      name: "Nguyen Van B",
      designation: "Manager",
      type: "Office",
      checkInTime: "12:00 AM",
      status: true,
    },
    {
      id: 3,
      name: "Nguyen Van C",
      designation: "IT",
      type: "Remote",
      checkInTime: "12:00 AM",
      status: false,
    },
    {
      id: 4,
      name: "Nguyen Van D",
      designation: "Tester",
      type: "Remote",
      checkInTime: "12:00 AM",
      status: true,
    },
    {
      id: 5,
      name: "Nguyen Van E",
      designation: "HR",
      type: "Office",
      checkInTime: "12:00 AM",
      status: false,
    },
    {
      id: 6,
      name: "Nguyen Van F",
      designation: "Security",
      type: "Remote",
      checkInTime: "12:00 AM",
      status: true,
    },
  ];

  const columns = [
    {
      accessor: "id",
      title: "Employee ID",
      render: (record) => {
        return (
          <div className="flex flex-row gap-2">
            {/* <Avatar src="src/assets/Logo_Circle_FutureHRM.svg" /> */}
            <span className="font-semibold">{record?.id || "-"}</span>
          </div>
        );
      },
    },
    // {
    //   accessor: "id",
    //   title: "Employee ID",
    // },
    {
      accessor: "name",
      title: "Employee Name",
    },
    {
      accessor: "designation",
      title: "Designation",
    },
    {
      accessor: "type",
      title: "Type",
    },
    {
      accessor: "status",
      title: "Status",
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
