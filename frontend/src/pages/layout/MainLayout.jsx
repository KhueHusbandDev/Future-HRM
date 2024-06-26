import { AppShell, Burger, Group, Skeleton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet } from "react-router-dom";
import { useAccessToken } from "../../store/AuthStore";
import { Header } from "./components/Header";

import { memo } from "react";
import { Nav } from "./components/Nav";

const MainLayout = () => {
  const [opened, { toggle: toggleNavBar }] = useDisclosure();
  const token = useAccessToken();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Header onOpenNavBar={toggleNavBar} isNavBarOpen={opened} />
      </AppShell.Header>
      <AppShell.Navbar p="md">
        {token ? <Nav /> : <h2>Login to navigate</h2>}
      </AppShell.Navbar>
      <AppShell.Main className="overflow-scroll w-[100vw] h-[100vh]">
        {token ? <Outlet /> : <h2>You need to login</h2>}
      </AppShell.Main>
    </AppShell>
  );
};

export default memo(MainLayout);
