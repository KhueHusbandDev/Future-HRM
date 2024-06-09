import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Input } from "@mantine/core"
// import "./TailwindCSSContainer.css";

export const BodyStaffSearchBar = ({ }) => {
  return (
    <form className="w-1/3 h-fit">
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
  )
}