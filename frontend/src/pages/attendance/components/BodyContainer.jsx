import React, { useState } from "react";
import { BodyStaffSearchBar } from "./BodyStaffSearchBar";
import { StaffTileTable } from "./StaffTileTable";
import { TablePaginator } from "./TablePaginator";
export const BodyContainer = () => {
  const dbElements = [
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
    {
      id: 7,
      name: "Nguyen Van G",
      designation: "CEO",
      type: "Office",
      checkInTime: "12:00 AM",
      status: true,
    },
    {
      id: 8,
      name: "Nguyen Van H",
      designation: "Manager",
      type: "Office",
      checkInTime: "12:00 AM",
      status: true,
    },
    {
      id: 9,
      name: "Nguyen Van I",
      designation: "IT",
      type: "Remote",
      checkInTime: "12:00 AM",
      status: false,
    },
    {
      id: 10,
      name: "Nguyen Van J",
      designation: "Tester",
      type: "Remote",
      checkInTime: "12:00 AM",
      status: true,
    },
    {
      id: 11,
      name: "Nguyen Van K",
      designation: "HR",
      type: "Office",
      checkInTime: "12:00 AM",
      status: false,
    },
    {
      id: 12,
      name: "Nguyen Van L",
      designation: "Security",
      type: "Remote",
      checkInTime: "12:00 AM",
      status: true,
    },
    {
      id: 13,
      name: "Nguyen Van M",
      designation: "CEO",
      type: "Office",
      checkInTime: "12:00 AM",
      status: true,
    },
    {
      id: 14,
      name: "Nguyen Van N",
      designation: "Manager",
      type: "Office",
      checkInTime: "12:00 AM",
      status: true,
    },
    {
      id: 15,
      name: "Nguyen Van O",
      designation: "IT",
      type: "Remote",
      checkInTime: "12:00 AM",
      status: false,
    },
    {
      id: 16,
      name: "Nguyen Van P",
      designation: "Tester",
      type: "Remote",
      checkInTime: "12:00 AM",
      status: true,
    },
    {
      id: 17,
      name: "Nguyen Van Q",
      designation: "HR",
      type: "Office",
      checkInTime: "12:00 AM",
      status: false,
    },
    {
      id: 18,
      name: "Nguyen Van R",
      designation: "Security",
      type: "Remote",
      checkInTime: "12:00 AM",
      status: true,
    },
  ];

  // Initial data defined inside the component
  const initialElements = dbElements;

  // State to manage elements
  const [elements, setElements] = useState(initialElements);

  // Function to update elements (this could be triggered by a search bar or other interactions)
  const updateElements = (newElements) => {
    setElements(newElements);
  };

  const paginate = (pageIndex, elementsPerPage) => {
    setElements(
      initialElements.slice(
        pageIndex * elementsPerPage,
        (pageIndex + 1) * elementsPerPage >= initialElements.length
          ? initialElements.length
          : (pageIndex + 1) * elementsPerPage - 1,
      ),
    );
  };

  return (
    <>
     <div className="flex flex-col flex-nowrap gap-4">
        <BodyStaffSearchBar />
        <StaffTileTable />
      </div>
    </>
  );
};
