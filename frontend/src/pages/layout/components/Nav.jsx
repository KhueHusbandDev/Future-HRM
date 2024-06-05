import { NavLink } from "@mantine/core";
import { navItems } from "../NavItem";

export const Nav = () => {
  const links = navItems.map((item, index) => (
    <NavLink
      className={"font-semibold"}
      href={item.ref}
      label={item.label}
      leftSection={item.icon}
      key={index}
    />
  ));
  return <nav className={"flex flex-col"}>{links}</nav>;
};
