import { NativeSelect, Select } from "@mantine/core";
import { useState } from "react";

export const TablePaginator = ({ paginate }) => {
  const currentElePerPage = 10;
  const pageIndex = 0;
  const [elePerPage, setElePerPage] = useState(currentElePerPage);

  const changeElePerPage = (event) => {
    const newElePerPage = parseInt(event.currentTarget.value);
    setElePerPage(newElePerPage)
    paginate(pageIndex, newElePerPage)
    console.log("change ele per page success:", event.currentTarget.value)
  }

  return (
    <>
      <div className="flex align-middle items-center mt-10">
        <span className="flex mr-5">Show</span>
        <NativeSelect className="flex"
          w={100} size="md" radius="md"
          data={["10", "20", "50"]}
          onChange={changeElePerPage} />
      </div>
    </>
  );
}