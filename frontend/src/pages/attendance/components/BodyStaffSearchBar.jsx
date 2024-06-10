
import { TextInput, rem } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
export const BodyStaffSearchBar = ({}) => {
  return (
    <form className="w-1/2 ">
      <TextInput
        radius="xl"
        size="md"
        placeholder="Search for Staff"
        rightSectionWidth={42}
        leftSection={
          <IconSearch
            style={{ width: rem(18), height: rem(18) }}
            stroke={1.5}
          />
        }
      />
    </form>
  );
};
