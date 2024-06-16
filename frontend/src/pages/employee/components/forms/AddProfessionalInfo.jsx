import { useFormContext } from "react-hook-form";
import { FloatingDate } from "../../../components/FloatingDate";
import { FloatingInput } from "../../../components/FloatingInput";
import { FloatingSelect } from "../../../components/FloatingSelect";

export const AddProfessionalInfo = () => {
  const { register } = useFormContext({ mode: "onChane", defaultValue: {} });
  return (
    <div className="flex flex-col flex-nowrap p-4 w-full h-full gap-8">
      <div className="flex flex-row justify-between gap-12">
        <FloatingInput
          inputId="employeeId"
          label="Employee ID"
          className="w-1/2 h-14"
          {...register("employeeId")}
        />
        <FloatingInput
          inputId="userName"
          label="User Name"
          className="w-1/2 h-14"
          {...register("userName")}
        />
      </div>
      <div className="flex flex-row justify-between gap-12">
        <FloatingSelect
          inputId="employeeType"
          label="Employee Type"
          className="w-1/2 h-14"
          selections={["HR Admin", "Master", "Developer", "Designer"]}
          {...register("employeeType")}
        />
        <FloatingInput
          inputId="hrEmail"
          label="Email Address"
          className="w-1/2 h-14"
          {...register("hrEmail")}
        />
      </div>
      <div className="flex flex-row justify-between gap-12">
        <FloatingSelect
          inputId="department"
          label="Department"
          className="w-1/2 h-14"
          selections={["IT", "HR", "Design"]}
          {...register("department")}
        />
        <FloatingInput
          inputId="designation"
          label="Designation"
          className="w-1/2 h-14"
          {...register("designation")}
        />
      </div>
      <div className="flex flex-row justify-between gap-12">
        <FloatingInput
          inputId="workingDays"
          label="Working Days"
          className="w-1/2 h-14"
          {...register("workingDays")}
        />
        <FloatingDate
          inputId="joiningDate"
          label="Joining Date"
          className="w-1/2 h-14"
          {...register("joiningDate")}
        />
      </div>
      <div>
        <FloatingInput
          inputId="officeLocation"
          label="Office Location"
          className="w-full h-14"
          {...register("officeLocation")}
        />
      </div>
    </div>
  );
};
