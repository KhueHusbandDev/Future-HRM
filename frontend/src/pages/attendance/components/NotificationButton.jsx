import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
export const NotificationButton = ({ }) => {
  const navigate = useNavigate();

  return (
    <>
      <Button 
        className="border-none bg-transparent hover:bg-transparent w-1/6 h-2/3"
        onClick = {()=> {navigate('/employee/notifications')}}>
        <FontAwesomeIcon className="text-gray-800 hover:text-gray-500 " icon={faBell} size="2x" />
      </Button>
    </>
  );
}