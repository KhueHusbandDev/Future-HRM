import { NavLink } from "@mantine/core";

import { memo, useState } from "react";
import { useAccessTokenData } from "../../../store/AuthStore";
import { adminNavItems, staffNavItems } from "../NavItem";
export const Nav = () => {
  const [active, setActive] = useState();
  const tokenData = useAccessTokenData();

  let navItems;
  tokenData.isManager ? (navItems = adminNavItems) : (navItems = staffNavItems);

  const links = navItems.map((item, index) => (
    <NavLink
      onClick={() => setActive(item.label)}
      className={"font-semibold"}
      href={item.ref}
      label={item.label}
      leftSection={item.icon}
      key={index}
      active={active === item.label || undefined}
    />
  ));
  return <nav className={"flex flex-col"}>{links}</nav>;
};
