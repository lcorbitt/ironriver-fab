import type { NavItem } from "./types";

export const isActivePath = (pathname: string, item: NavItem): boolean => {
  if (item.href === "/") return pathname === "/";
  return pathname === item.href || pathname.startsWith(`${item.href}/`);
};
