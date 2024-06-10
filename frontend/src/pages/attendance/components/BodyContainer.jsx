import { BodyStaffSearchBar } from "./BodyStaffSearchBar";
import { StaffTileTable } from "./StaffTileTable";

export const BodyContainer = ({ }) => {
  return (
    <div className="flex flex-col flex-nowrap gap-4">
      <BodyStaffSearchBar />
      <StaffTileTable />
    </div>
  );
}