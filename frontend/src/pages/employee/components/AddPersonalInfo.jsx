import { Button, Group, NativeSelect, TextInput } from "@mantine/core";
import { DateInput, DatePickerInput } from "@mantine/dates";
import { Controller, useForm } from "react-hook-form";
import { FloatingDate } from "../../components/FloatingDate";
import { FloatingInput } from "../../components/FloatingInput";
import { FloatingSelect } from "../../components/FloatingSelect";

function AddPersonalInfo() {
  const { handleSubmit, control, register } = useForm({
    mode: "onChange",
    defaultValues: {},
  });
  const onSubmit = (formData) => {
    console.log("ts", formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col flex-nowrap p-4 w-full h-full gap-8">
        <div className="flex flex-row justify-between gap-12">
          <FloatingInput
            inputId="firstName"
            label="First Name"
            className="w-1/2 h-14"
            {...register("firstName")}
          />
          <FloatingInput
            inputId="lastName"
            label="Last Name"
            className="w-1/2 h-14"
            {...register("lastName")}
          />
        </div>
        <div className="flex flex-row justify-between gap-12">
          <FloatingInput
            inputId="phoneNumber"
            label="Phone Number"
            className="w-1/2 h-14"
            {...register("phoneNumber")}
          />
          <FloatingInput
            inputId="email"
            label="Email"
            className="w-1/2 h-14"
            {...register("email")}
          />
        </div>
        <div className="flex flex-row justify-between gap-12">
          <FloatingDate
            inputId="dob"
            label="Date of Birth"
            className="w-1/2 h-14"
            {...register("dob")}
          />
          <FloatingSelect
            inputId="maritalStatus"
            label="Marital Status"
            className="w-1/2 h-14"
            selections={["Single", "Married", "Divorced", "Widowed"]}
            {...register("maritalStatus")}
          />
        </div>
      </div>
      {/* <f direction="columns" spacing="md" grow>
        <Group grow>
          <Controller
            name="firstName"
            control={control}
            render={(field) => {}}
          />
        </Group>
        <Group grow>
          <TextInput
            withAsterisk
            label="Mobile Number"
            placeholder="Mobile Number"
          />
          <TextInput withAsterisk label="Email" placeholder="your@email.com" />
        </Group>

        <Group grow>
          <DatePickerInput
            withAsterisk
            label="Date of Birth"
            placeholder="Date of Birth"
          />
          <NativeSelect
            withAsterisk
            label="Marital Status"
            data={["Single", "Married", "Divorced", "Widowed"]}
            placeholder="Marital Status"
          />
        </Group>

        <Group grow>
          <NativeSelect
            withAsterisk
            label="Gender"
            data={["Male", "Female", "Other"]}
            placeholder="Gender"
          />
          <TextInput
            withAsterisk
            label="Nationality"
            placeholder="Nationality"
          />
        </Group>

        <TextInput withAsterisk label="Address" placeholder="Address" />

        <Group grow>
          <TextInput withAsterisk label="City" placeholder="City" />
          <TextInput withAsterisk label="State" placeholder="State" />
          <TextInput withAsterisk label="ZIP Code" placeholder="ZIP Code" />
        </Group>
      </f>

      <Group position="right" mt="md">
        <Button type="submit">Next</Button>
        <Button type="button" variant="outline">
          Cancel
        </Button>
      </Group> */}
    </form>
  );
}

export default AddPersonalInfo;
