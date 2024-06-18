import { ActionIcon, Avatar, Group } from "@mantine/core";
import {
  IconEdit,
  IconEye,
  IconEyeCheck,
  IconEyeEdit,
  IconTrash,
} from "@tabler/icons-react";
import { DataTable } from "mantine-datatable";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { configApi } from "../../../api/config";
import { toast } from "sonner";

export const EmployeeTable = () => {
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
  const navigate = useNavigate();
  const handleOnRowClick = (record) => {
    navigate(`update-employee/${record.record.id}`, {state: {
      employeeId: record.record.id,
    }});
  };

  const [listEmployee, setListEmployee] = useState([]);
  console.log('listEmployee: ', listEmployee);

  const getListEmployee = async () => {
     await configApi.get("/staff/list").then(rs => {
      console.log('rs: ', rs);
    if(!rs?.data) {
      toast.error('Cannot get list employee');
    }
    setListEmployee(rs.data.data);
    })
  }
  useEffect(()=>{
      getListEmployee();
  }, [])

  const columns = [
    {
      accessor: "#combine-name",
      title: "Employee Name",
      render: (record) => {
        console.log('record: ', record);
        return (
          <div className="flex flex-row gap-2">
            <Avatar src={`http://localhost:8080/static/images/${record.idPhoto}`} />
            <span className="font-semibold">{`${record?.firstname} ${record?.lastname}` || "-"}</span>
          </div>
        );
      },
    },
    {
      accessor: "id",
      title: "Employee ID",
    },
    {
      accessor: "department",
      title: "Department",
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
      title: "Employee Name",
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
  return <DataTable columns={columns} records={listEmployee} onRowClick={handleOnRowClick} />;
};
