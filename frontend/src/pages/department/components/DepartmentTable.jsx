import React, { useState, useEffect } from "react";
import { ActionIcon, Group } from "@mantine/core";
import { DataTable } from "mantine-datatable";
import axios from "axios";
import { IconEdit, IconEyeCheck, IconTrash } from "@tabler/icons-react";
// import { useToasts } from "react-toast-notifications";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export const DepartmentTable = ({ departments, setDepartments }) => {
  const [refresh, setRefresh] = useState(false);
  // const { addToast } = useToasts(); // Initialize useToasts hook

  const handleUpdateDelStatus = async (id, delStatus) => {
    try {
      await axios.put(`http://localhost:8080/department/updateDelStatus?id=${id}&del=${delStatus}`);
      
      // Update local state to reflect the change
      const updatedDepartments = departments.map(department =>
        department.id === id ? { ...department, del: delStatus } : department
      );
      setDepartments(updatedDepartments);
      // addToast("Cập nhật trạng thái thành công", { appearance: "success" });
      // Reload the page to reflect changes
      window.location.reload();
    } catch (error) {
      console.error("Error updating department del status:", error);
      window.location.reload();
      
    }
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      const response = await axios.get("http://localhost:8080/department/list");
      setDepartments(response.data);
    } catch (error) {
      console.error("Error fetching departments:", error);
    }
  };

  const columns = [
    {
      accessor: "id",
      title: "ID",
    },
    {
      accessor: "name",
      title: "Tên Phòng Ban",
    },
    {
      accessor: "nameVn",
      title: "Tên Tiếng Việt",
    },
    {
      accessor: "del",
      title: "Trạng Thái",
      render: (record) => (record.del ? "Ẩn" : "Hiển thị"),
    },
    {
      accessor: "#",
      title: "Hành Động",
      render: (record) => (
        <Group gap={4} justify="right" wrap="nowrap">
          <ActionIcon size="sm" variant="subtle" color="black">
            <IconEyeCheck size={16} />
          </ActionIcon>
          <ActionIcon size="sm" variant="subtle" color="black">
          <Link to={`/update-department/${record.id}`}>
          {/* <Link to={`/department/update-department/`}> */}
            <IconEdit size={16} />
          </Link>
          </ActionIcon>
          <ActionIcon
            size="sm"
            variant="subtle"
            color="black"
            onClick={() => handleUpdateDelStatus(record.id, !record.del)}
          >
            <IconTrash size={16} />
          </ActionIcon>
        </Group>
      ),
    },
  ];

  return <DataTable columns={columns} records={departments} />;
};



