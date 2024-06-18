import React, { useState, useEffect } from "react";
import { ActionIcon, Group, Paper, Button } from "@mantine/core";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IconPlus, IconEdit } from "@tabler/icons-react";

export const UpdateDepartment = ({ departmentId }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [nameVn, setNameVn] = useState("");

  // Load department data for editing on component mount
  useEffect(() => {
    if (departmentId) {
      // Fetch department data from API
      axios.get(`http://localhost:8080/department/detail/id=${id}`)
        .then((response) => {
          const { name, nameVn } = response.data;
          setName(name);
          setNameVn(nameVn);
        })
        .catch((error) => {
          console.error("Error fetching department:", error);
        });
    }
  }, [departmentId]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (departmentId) {
        // Update existing department
        await axios.put(`http://localhost:8080/department/update/${departmentId}`, {
          name,
          nameVn,
        });
      } else {
        // Create new department
        await axios.post("http://localhost:8080/department/add", {
          name,
          nameVn,
          del: false, // Giả định "del" mặc định là false cho một Phòng Ban mới
        });
      }
      console.log("Phòng Ban đã được cập nhật hoặc tạo mới thành công");
      navigate('/department'); // Chuyển hướng đến trang danh sách Phòng Ban
    } catch (error) {
      console.error("Lỗi khi cập nhật hoặc tạo Phòng Ban mới:", error);
    }
  };

  // 

  return (
    <Paper className="p-4 max-w-lg mx-auto">
      <form onSubmit={handleFormSubmit} >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Update Department
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="nameVn" className="block text-sm font-medium text-gray-700">
            Vietnamese
          </label>
          <input
            type="text"
            id="nameVn"
            name="nameVn"
            value={nameVn}
            onChange={(e) => setNameVn(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="flex justify-end">
          <Button
            type="submit"
            className="text-white bg-indigo-500 rounded-md"
            leftSection={departmentId ? <IconEdit /> : <IconPlus />}
          >
            {departmentId ? "Update Department" : "Add Department"}
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default UpdateDepartment;
