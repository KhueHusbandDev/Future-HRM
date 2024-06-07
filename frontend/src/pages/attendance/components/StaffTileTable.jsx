import { Avatar, Button, Table } from "@mantine/core";

export const StaffTileTable = ({ elements }) => {
  elements = [
    { id: 1, name: "Nguyen Van A", designation: 'CEO', type: 'Office', checkInTime: "12:00 AM", status: true },
    { id: 2, name: "Nguyen Van B", designation: 'Manager', type: 'Office', checkInTime: "12:00 AM", status: true },
    { id: 3, name: "Nguyen Van C", designation: 'IT', type: 'Remote', checkInTime: "12:00 AM", status: false },
    { id: 4, name: "Nguyen Van D", designation: 'Tester', type: 'Remote', checkInTime: "12:00 AM", status: true },
    { id: 5, name: "Nguyen Van E", designation: 'HR', type: 'Office', checkInTime: "12:00 AM", status: false },
    { id: 6, name: "Nguyen Van F", designation: 'Security', type: 'Remote', checkInTime: "12:00 AM", status: true },
  ];

  const rows = elements.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td className="flex items-center"><Avatar w={50} h={50} isCircle={true} className="mr-2" />{element.name}</Table.Td>
      <Table.Td>{element.designation}</Table.Td>
      <Table.Td>{element.type}</Table.Td>
      <Table.Td>{element.checkInTime}</Table.Td>
      <Table.Td>{element.status
        ? <Button className="h-full w-fit px-4 border bg-green-300 bg-opacity-40 text-green-500">On-time</Button>
        : <Button className="h-full w-fit px-4 border bg-red-300 bg-opacity-40 text-red-500">Late</Button>}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Staff Name</Table.Th>
          <Table.Th>Designation</Table.Th>
          <Table.Th>Type</Table.Th>
          <Table.Th>Check In Time</Table.Th>
          <Table.Th>Status</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}