import { ActionIcon, Group, Image, Text } from "@mantine/core";
import { IconCamera, IconPhoto, IconUpload, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FloatingDate } from "../../../components/FloatingDate";
import { FloatingInput } from "../../../components/FloatingInput";
import { FloatingSelect } from "../../../components/FloatingSelect";
import {Dropzone} from "@mantine/dropzone";
export const AddPersonalInfo = () => {
  const { register, control, setValue, watch } = useFormContext({
    mode: "onChange",
    defaultValues: {},
  });
  const file = watch("fileUpload");
  return (
    <div className="flex flex-col flex-nowrap p-4 w-full h-full gap-8">
      <div className="w-28 h-28 relative">
        {!!file?.[0] && (
          <ActionIcon
            size={16}
            className="absolute -top-2 -right-2 rounded-xl z-20 bg-slate-300"
            onClick={() => {
              setValue("fileUpload", []);
            }}
          >
            <IconX />
          </ActionIcon>
        )}
        <Controller
          control={control}
          name="fileUpload"
          render={({ field }) => {
            let imageURL = "";

            if (!!field.value?.[0]) {
              imageURL = URL.createObjectURL(field.value[0]);
            }
            return (
              <>
                <Dropzone
                  onDrop={(files) => {
                    setValue("fileUpload", files);
                  }}
                  onReject={() => setValue("fileUpload", "")}
                  maxSize={3 * 1024 ** 2}
                  className="w-full h-full"
                  {...field}
                >
                  {!!field.value?.[0] ? (
                    <Image w={80} h={80} src={imageURL} />
                  ) : (
                    <IconCamera
                      size={50}
                      className="text-indigo-500 self-center"
                    />
                  )}
                </Dropzone>
              </>
            );
          }}
        />
      </div>
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
      <div className="flex flex-row justify-between gap-12">
        <FloatingSelect
          inputId="gender"
          label="Gender"
          className="w-1/2 h-14"
          selections={["Male", "Female", "Other"]}
          {...register("gender")}
        />
        <FloatingInput
          inputId="nationality"
          label="Nationality"
          className="w-1/2 h-14"
          {...register("nationality")}
        />
      </div>
      <div>
        <FloatingInput
          inputId="address"
          label="Address"
          className="w-full h-14"
          {...register("address")}
        />
      </div>
    </div>
  );
};
