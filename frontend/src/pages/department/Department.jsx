import { Button, Group, Paper } from "@mantine/core";
import { IconAdjustments, IconPlus } from "@tabler/icons-react";
import { SearchBar } from "../attendance/components/SearchBar";
import { DepartmentTable } from "./components/DepartmentTable";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';




export const Department = () => {
  const [departments, setDepartments] = useState([]);
  const fetchDepartments = async () => {
    try {
      const response = await axios.get('http://localhost:8080/department/list');
      console.log('API Response:', response.data); // Log API response

      if (response.data.isSuccess) {
        setDepartments(response.data.data);
      } else {
        console.error('Failed to fetch departments');
        // return [];
      }
    } catch (error) {
      console.error('Error fetching departments:', error);
      // return [];
    }
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

//addnew department
  const navigate = useNavigate();
  const [items, setItems] = useState([
    {
      title: "All Department",
      href: "/department",
    },
  ]);

  const breads = items.map((item, index) => (
    <a href={item.href} key={index}>
      {item.title}
    </a>
  ));

  //h2
  const handleAddDepartment = async (formData) => {
    try {
      const response = await axios.post('http://localhost:8080/department/add', formData);
      if (response.data.isSuccess) {
        fetchDepartments(); // Refresh departments list after successful addition
      } else {
        console.error('Failed to add department');
      }
    } catch (error) {
      console.error('Error adding department:', error);
    }
  };
  return (
    <>
      <Paper className="flex flex-col flex-nowrap w-full h-full border-solid border border-slate-200 rounded-md p-4 gap-8">
        <div className="w-1/2 flex align-middle items-center">
          <div className="block">
            <b className="text-md">Department</b>
            <br />
            <span className="text-sm">All Department </span>
          </div>
        </div>
        <div className="flex flex-row flex-nowrap">
          <div className="w-1/3">
            <SearchBar />
          </div>
          <div className="flex-grow" />
          <Group>
            <Button
              component="a"
              w={225}
              h={50}
              className="text-white bg-indigo-500 rounded-md"
              leftSection={<IconPlus />}
              onClick={() => {
                setItems((prev) => [
                  ...prev,
                  { title: "Add new department", href: "/add-new-department" },
                ]);
                navigate("add-new-department");
              }}
            >
              Add new department
            </Button>
            <Button
              h={50}
              leftSection={<IconAdjustments />}
              className="text-black bg-white rounded-md border border-solid border-slate-300"
            >
              Filter
            </Button>
          </Group>
        </div>
        <DepartmentTable departments={departments} />
      </Paper>
    </>
  );
};