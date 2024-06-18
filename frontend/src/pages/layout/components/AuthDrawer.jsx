import { Drawer } from "@mantine/core";
import { LoginForm } from "./LoginForm";

export const AuthDrawer = ({ opened, onClose }) => {
  return (
    <Drawer
      opened={opened}
      onClose={onClose}
      title={
        <span className="font-sans font-semibold text-3xl">Authentication</span>
      }
      position={"right"}
    >
     <LoginForm onClose={onClose} />
    </Drawer>
  );
};
