import { Drawer } from "@mantine/core";
import { LoginForm } from "./LoginForm";
import { ResgisterForm } from "./RegisterForm";

export const AuthDrawer = ({ opened, onOpen, onClose, isLogin }) => {
  return (
    <Drawer
      opened={opened}
      onClose={onClose}
      title={
        <span className="font-sans font-semibold text-3xl">Authentication</span>
      }
      position={"right"}
    >
      {isLogin ? <LoginForm onClose={onClose} /> : <ResgisterForm onClose={onClose}/>}
    </Drawer>
  );
};
