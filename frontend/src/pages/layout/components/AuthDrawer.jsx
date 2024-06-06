import { Drawer } from "@mantine/core";
import { LoginForm } from "./LoginForm";
import { ResgisterForm } from "./RegisterForm";

export const AuthDrawer = ({ opened, onOpen, onClose, isLogin }) => {
  return (
    <Drawer
      opened={opened}
      onClose={onClose}
      title={
        <h2 className="font-sans font-semibold text-3xl">Authentication</h2>
      }
      position={"right"}
    >
      {isLogin ? <LoginForm /> : <ResgisterForm />}
    </Drawer>
  );
};
