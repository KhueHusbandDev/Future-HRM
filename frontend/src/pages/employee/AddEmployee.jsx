import {
  Button,
  Group,
  Paper,
  Tabs,
  TabsList,
  TabsPanel,
  TabsTab,
} from "@mantine/core";
import {
  IconBriefcase,
  IconBriefcaseFilled,
  IconFileDescription,
  IconLock,
  IconUser,
  IconUserFilled,
} from "@tabler/icons-react";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { AccountAccess } from "./components/forms/AccountAccesss";
import { AddPersonalInfo } from "./components/forms/AddPersonalInfo";
import { AddProfessionalInfo } from "./components/forms/AddProfessionalInfo";

export const AddEmployee = () => {
  const [activeTab, setActiveTab] = useState("personal_information");
  const methods = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Button type="submit">Save</Button>

        <Tabs
          value={activeTab}
          onChange={setActiveTab}
          className="text-indigo-500"
        >
          <TabsList>
            <TabsTab
              value="personal_information"
              leftSection={
                activeTab === "personal_information" ? (
                  <IconUserFilled size={24} />
                ) : (
                  <IconUser size={24} />
                )
              }
            >
              Personal Information
            </TabsTab>
            <TabsTab
              value="pro_information"
              leftSection={
                activeTab === "pro_information" ? (
                  <IconBriefcaseFilled size={24} />
                ) : (
                  <IconBriefcase size={24} />
                )
              }
            >
              Professional Information
            </TabsTab>
          </TabsList>

          <TabsPanel value="personal_information">
            <AddPersonalInfo />
          </TabsPanel>
          <TabsPanel value="pro_information">
            <AddProfessionalInfo />
          </TabsPanel>
        </Tabs>
      </form>
    </FormProvider>
  );
};
