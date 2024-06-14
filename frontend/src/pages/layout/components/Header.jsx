import { Avatar, AvatarGroup, Burger, Button, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { useAccessToken, useAccessTokenData } from "../../../store/AuthStore";
import { useNavigate } from "react-router-dom";
import { AuthDrawer } from "./AuthDrawer";
import { Logo } from "./Logo";
import { UserMenu } from "./UserMenu";
import { SearchBar } from "../../attendance/components/SearchBar";
import { NotificationButton } from "../../attendance/components/NotificationButton"
import { Component } from "react";

export const Header = ({ isNavBarOpen, onOpenNavBar }) => {
  const [openedAuthDrawer, { open: openDrawer, close: closeDrawer }] =
    useDisclosure();
  const [isLogin, setIsLogin] = useState();
  const token = useAccessToken();
  return (
    <header className="flex flex-row flex-nowrap h-14 w-full pr-8">
      <div className="flex h-full px-4 justify-center items-center">
        <Burger
          opened={isNavBarOpen}
          onClick={() => {
            onOpenNavBar;
          }}
          hiddenFrom="sm"
          size="sm"
        />
        <Logo w={70} h={250} />
      </div>
      
      <div className="flex-grow" />
      <div className="w-1/2 flex align-middle items-center">
          <SearchBar className="p-5 flex" />
          <NotificationButton 
          />
      </div>
      {!!token ? (
        <UserMenu />
      ) : (
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
      )}

      <AuthDrawer
        onClose={closeDrawer}
        opened={openedAuthDrawer}
        isLogin={!!isLogin}
      />
    </header>
  );
};
