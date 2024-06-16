import { Button, Group, NativeSelect, TextInput } from "@mantine/core";
import { DateInput, DatePickerInput } from "@mantine/dates";
import { Controller, useForm, useFormContext } from "react-hook-form";
import { FloatingDate } from "../../../components/FloatingDate";
import { FloatingInput } from "../../../components/FloatingInput";
import { FloatingSelect } from "../../../components/FloatingSelect";

export const AccountAccess = () => {
  const { register } = useFormContext({
    mode: "onChange",
    defaultValues: {},
  });

  return (
    <div className="flex flex-col flex-nowrap p-4 w-full h-full gap-8">
      <div className="flex flex-row justify-between gap-12">
        <FloatingInput
          inputId="contactEmail"
          label="Contact Email"
          className="w-1/2 h-14"
          {...register("contactEmail")}
        />
        <FloatingInput
          inputId="slackId"
          label="Slack ID"
          className="w-1/2 h-14"
          {...register("slackId")}
        />
      </div>
      <div className="flex flex-row justify-between gap-12">
        <FloatingInput
          inputId="skypeId"
          label="Skype ID"
          className="w-1/2 h-14"
          {...register("skypeId")}
        />
        <FloatingInput
          inputId="githubId"
          label="Github ID"
          className="w-1/2 h-14"
          {...register("githubId")}
        />
      </div>
    </div>
  );
};
