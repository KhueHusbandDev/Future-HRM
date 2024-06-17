import { ActionIcon, Avatar, Group ,Paper, Button} from "@mantine/core";
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { IconPlus } from '@tabler/icons-react';

export const AddDepartment = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [nameVn, setNameVn] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/department/add', {
        name,
        nameVn,
        del: false // Giả định "del" mặc định là false cho một Phòng Ban mới
      });
      console.log('Phòng Ban mới được tạo:', response.data);
      navigate('/department'); // Chuyển hướng đến trang danh sách Phòng Ban
    } catch (error) {
      console.error('Lỗi khi tạo Phòng Ban mới:', error);
    }
  };

  return (
    // <NotificationsProvider>
    <Paper className="p-4 max-w-lg mx-auto">
      <form onSubmit={handleFormSubmit} >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Department Name
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
            Vietnamese Name
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
            leftSection={<IconPlus />}
          >
            Add Department
          </Button>
        </div>
      </form>
    </Paper>
    //  {/* </NotificationsProvider> */}
  );
};

export default AddDepartment;
