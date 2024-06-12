import { Tabs, rem } from '@mantine/core';
import { IconUserFilled, IconBriefcase, IconFileDescription, IconLock } from '@tabler/icons-react';

function Demo() {
  const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <Tabs defaultValue="personal_information">
      <Tabs.List>
        <Tabs.Tab value="personal_information" leftSection={<IconUser style={iconStyle} />}>
          Personal Information
        </Tabs.Tab>
        <Tabs.Tab value="pro_informatioin" leftSection={<IconBriefcase style={iconStyle} />}>
          Professional Inforation
        </Tabs.Tab>
        <Tabs.Tab value="documents" leftSection={<IconFileDescription style={iconStyle} />}>
          Documents
        </Tabs.Tab>
        <Tabs.Tab value="account_access" leftSection={<IconLock style={iconStyle} />}>
          Account Access
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="personal_information">
        Gallery tab content
      </Tabs.Panel>

      <Tabs.Panel value="pro_informatioin">
        Messages tab content
      </Tabs.Panel>

      <Tabs.Panel value="documents">
        Settings tab content
      </Tabs.Panel>
      <Tabs.Panel value="account_access">
        Settings tab content
      </Tabs.Panel>
    </Tabs>
  );
}