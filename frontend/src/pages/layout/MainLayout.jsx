import { AppShell, Burger, Group, Skeleton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Logo } from "./components/Logo";
import { Header } from "./components/Header";

export const MainLayout = () => {
  const [opened, { toggle: toggleNavBar }] = useDisclosure();
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
        <Nav />
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};
