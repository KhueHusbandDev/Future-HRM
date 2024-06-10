import { icon } from "@fortawesome/fontawesome-svg-core";
import { Button, Group, Paper, SimpleGrid, Text } from "@mantine/core";
import { Calendar } from "@mantine/dates";
import {
  IconAB2,
  IconBrowserCheck,
  IconCoin,
  IconUsersGroup,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { StaffTileTable } from "../attendance/components/StaffTileTable";
const companyDatas = [
  {
    title: "Total Employee",
    value: 560,
    dateUpdate: new Date().toDateString(),
    icon: <IconUsersGroup />,
  },
  {
    title: "Total Department",
    value: 10,
    dateUpdate: new Date().toDateString(),
    icon: <IconAB2 />,
  },
  {
    title: "Total Attendance",
    value: 500,
    dateUpdate: new Date().toDateString(),
    icon: <IconBrowserCheck />,
  },
  {
    title: "Total Payroll",
    value: 5000,
    dateUpdate: new Date().toDateString(),
    icon: <IconCoin />,
  },
];

const attendanceChartData = [
  {
    name: "Monday",
    presence: 70,
    absence: 20,
    remote: 10,
  },
  {
    name: "Tuesday",
    presence: 50,
    absence: 30,
    remote: 20,
  },
  {
    name: "Wednesday",
    presence: 60,
    absence: 20,
    remote: 20,
  },
  {
    name: "Thursday",
    presence: 30,
    absence: 20,
    remote: 50,
  },
  {
    name: "Friday",
    presence: 90,
    absence: 5,
    remote: 5,
  },
];
export const Dashboard = () => {
  const navigate = useNavigate();

  const stats = companyDatas.map((stat) => {
    return (
      <Paper withBorder p="md" radius="md" key={stat.title}>
        <Group justify="space-between">
          <Text size="md" c="dimmed" className="font-semibold">
            {stat.title}
          </Text>
          <div className="bg-slate-20 rounded-sm text-indigo-500">
            {stat.icon}
          </div>
        </Group>
        <Group align="flex-end" gap="xs" mt={25}>
          <Text className="font-bold text-4xl">{stat.value}</Text>
        </Group>
        <hr />
        <Text fz="xs" c="dimmed" mt={7}>
          Updated at {stat.dateUpdate}
        </Text>
      </Paper>
    );
  });

  return (
    <div className="flex flex-col flex-nowrap gap-8">
      <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }}>{stats}</SimpleGrid>
      <Paper w="100%" h={550}>
        <ResponsiveContainer
          width="100%"
          height="100%"
          style={{ border: "solid 1px #e5e7eb", borderRadius: "10px" }}
        >
          <BarChart
            width="100%"
            height="100%"
            data={attendanceChartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" fontWeight={500} />
            <YAxis />
            <Bar
              dataKey="presence"
              stackId="a"
              fill="#7152f3"
              radius={[10, 10, 10, 10]}
              barSize={10}
            />
            <Bar
              dataKey="remote"
              stackId="a"
              fill="#feb85b"
              radius={[10, 10, 10, 10]}
              barSize={10}
            />
            <Bar
              dataKey="absence"
              stackId="a"
              fill="#f45b60"
              radius={[10, 10, 10, 10]}
              barSize={10}
            />
          </BarChart>
        </ResponsiveContainer>
      </Paper>

      <div className="flex flex-col gap-4">
        <div className="flex flex-row flex-nowrap">
          <Text className="font-bold">Attendance Overview</Text>
          <div className="flex-grow" />
          <Button
            type="fill"
            onClick={() => {
              navigate("/attendance");
            }}
          >
            View All
          </Button>
        </div>
        <StaffTileTable />
      </div>
    </div>
  );
};
