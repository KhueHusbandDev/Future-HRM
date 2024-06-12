import { ActionIcon, Avatar, Group } from "@mantine/core";
import {
  IconEdit,
  IconEye,
  IconEyeCheck,
  IconEyeEdit,
  IconTrash,
} from "@tabler/icons-react";
import { DataTable } from "mantine-datatable";

export const DepartmentTable = () => {
  const elements = [
    {
      id: 1,
      departmentname: "IT",
      vietnamese: "Cong Nghe Thong Tin",
      status: true,
    },
    {
      id: 2,
      departmentname: "HR",
      vietnamese: "Nhan Su",
      status: true,
    },
    {
      id: 3,
      departmentname: "SALE",
      vietnamese: "Kinh Doanh",
      status: false,
    },
    {
      id: 4,
      departmentname: "Accountant",
      vietnamese: "Ke Toan",
      status: true,
    },
  ];

  const columns = [
    {
      accessor: "id",
      title: "ID",
      render: (record) => {
        return (
          <div className="flex flex-row gap-2">
            {/* <Avatar src="src/assets/Logo_Circle_FutureHRM.svg" /> */}
            <span className="font-semibold">{record?.id || "-"}</span>
          </div>
        );
      },
    },
    {
      accessor: "departmentname",
      title: "Department Name",
    },
    {
      accessor: "vietnamese",
      title: "Vietnamese Name",
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
