import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mantine/core";

export const NotificationButton = ({ }) => {
  return (
    <>
      <Button className="border-none bg-transparent hover:bg-transparent w-1/6 h-2/3">
        <FontAwesomeIcon className="text-gray-800 hover:text-gray-500 " icon={faBell} size="2x" />
      </Button>
    </>
  );
}