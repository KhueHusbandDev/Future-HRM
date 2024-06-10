import { NavLink } from "@mantine/core";
import { navItems } from "../NavItem";
import { memo, useState } from "react";

export const Nav = () => {
  const [active, setActive] = useState();

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
