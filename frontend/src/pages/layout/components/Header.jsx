import { Burger, Button, Group } from "@mantine/core";
import { Logo } from "./Logo";
import { useDisclosure } from "@mantine/hooks";
import { AuthDrawer } from "./AuthDrawer";
import { useState } from "react";

export const Header = ({ isNavBarOpen, onOpenNavBar }) => {
  const [openedAuthDrawer, { open: openDrawer, close: closeDrawer }] =
    useDisclosure();
  const [isLogin, setIsLogin] = useState();
  return (
    <header className="flex flex-row flex-nowrap h-14 w-full pr-8">
      <Group h="100%" px="md">
        <Burger
          opened={isNavBarOpen}
          onClick={() => {
            onOpenNavBar;
          }}
          hiddenFrom="sm"
          size="sm"
        />
        <Logo w={50} h={50} />
      </Group>
      <div className="flex-grow" />
      <Group visibleFrom="sm">
        <Button
          variant="default"
          onClick={() => {
            openDrawer();
            setIsLogin(true);
          }}
        >
          Log in
        </Button>
        <Button
          onClick={() => {
            openDrawer();
            setIsLogin(false);
          }}
        >
          Sign up
        </Button>
      </Group>
      <AuthDrawer
        onClose={closeDrawer}
        opened={openedAuthDrawer}
        isLogin={!!isLogin}
      />
    </header>
  );
};
