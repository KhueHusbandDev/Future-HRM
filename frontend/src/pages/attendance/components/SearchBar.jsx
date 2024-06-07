
import { Button, Input } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export const SearchBar = ({ }) => {
  return (
    <form className="w-full h-fit">
      <div className="h-full border border-solid  border-black flex items-center rounded-lg m-5">
        <Button className="border-none hover:bg-slate-300 bg-transparent">
          <FontAwesomeIcon icon={faSearch} className="text-gray-900" />
        </Button>
        <Input
          className="border-none bg-transparent flex-grow"
          size="md"
          placeholder="Input component"
        />
      </div>
    </form>
  );
};
