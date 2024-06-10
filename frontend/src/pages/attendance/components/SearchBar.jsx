import { TextInput, rem } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

export const SearchBar = ({}) => {
  return (
    <form className="w-full h-fit">
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
