import React, { useState } from 'react';
import { Tabs, TabsList, TabsTab, TabsPanel } from '@mantine/core';
import { IconUser, IconUserFilled, IconBriefcase, IconFileDescription, IconLock, IconBriefcaseFilled } from '@tabler/icons-react';
import AddPersonalInfo from './components/AddPersonalInfo';

export const AddEmployee = () => {
  const [activeTab, setActiveTab] = useState('personal_information');
  
  return (
    <Tabs value={activeTab} onChange={setActiveTab} color="violet">
      <TabsList>
        <TabsTab value="personal_information" leftSection={activeTab === "personal_information" ? <IconUserFilled size={24} color="violet" /> : <IconUser size={24} color="violet"/>} >
          Personal Information
        </TabsTab>
        <TabsTab value="pro_information" leftSection={activeTab === "pro_information" ? <IconBriefcaseFilled size={24} /> :<IconBriefcase size={24} />}>
          Professional Information
        </TabsTab>
        <TabsTab value="documents" leftSection={<IconFileDescription size={24} />}>
          Documents
        </TabsTab>
        <TabsTab value="account_access" leftSection={<IconLock size={24} />}>
          Account Access
        </TabsTab>
      </TabsList>

      <TabsPanel value="personal_information">
        <AddPersonalInfo  />
      </TabsPanel>

      <TabsPanel value="pro_information">
        Messages tab content
      </TabsPanel>

      <TabsPanel value="documents">
        Settings tab content
      </TabsPanel>
      <TabsPanel value="account_access">
        Settings tab content
      </TabsPanel>
    </Tabs>
  );
};
