import React from 'react';
import { Avatar, Button, Table } from "@mantine/core";

export const StaffTileTable = ({ elements }) => {

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
};
