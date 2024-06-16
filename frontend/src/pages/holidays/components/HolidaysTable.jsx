import { ActionIcon, Avatar, Group } from "@mantine/core";
import {
  IconEdit,
  IconEye,
  IconEyeCheck,
  IconEyeEdit,
  IconTrash,
} from "@tabler/icons-react";
import { DataTable } from "mantine-datatable";

export const HolidaysTable = () => {
  const elements = [
    {
      date: "01/01/2024",
      day: "Monday",
      holidayname: "New year",
      checkInTime: "12:00 AM",
      status: true,
    },
    {
      date: 1,
      day: "Monday",
      holidayname: "New year",
      checkInTime: "12:00 AM",
      status: true,
    },
    {
      date: 1,
      day: "Monday",
      holidayname: "New year",
      checkInTime: "12:00 AM",
      status: true,
    },
    {
      date: 1,
      day: "Monday",
      holidayname: "New year",
      checkInTime: "12:00 AM",
      status: true,
    },
    {
      date: 1,
      day: "Monday",
      holidayname: "New year",
      checkInTime: "12:00 AM",
      status: true,
    },
    {
      date: 1,
      day: "Monday",
      holidayname: "New year",
      checkInTime: "12:00 AM",
      status: true,
    },
  ];

  const columns = [
    {
      accessor: "date",
      title: "Date",
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
      accessor: "day",
      title: "Day",
    },
    {
      accessor: "holidayname",
      title: "Holiday Name",
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
