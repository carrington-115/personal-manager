import { Metadata } from "next";
import React from "react";
import "../globals.css";
import { Sidebar } from "../../../ui-components";
import {
  CircleCheckBig,
  Cog,
  Home,
  PanelsTopLeft,
  UserRoundCog,
} from "lucide-react";
import { SidebarIconsProps } from "../../../types";

const linkElements: SidebarIconsProps[] = [
  { icon: <Home />, title: "Dashboard", link: "/pages/dashboard" },
  { icon: <CircleCheckBig />, title: "Tasks", link: "/pages/tasks" },
  { icon: <PanelsTopLeft />, title: "Projects", link: "/pages/projects" },
  { icon: <UserRoundCog />, title: "Profile", link: "/pages/profile" },
  { icon: <Cog />, title: "Settings", link: "/pages/settings" },
];

export const metadata: Metadata = {
  title: "App",
  description: "app description",
};

export default function componentName({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="container w-screen h-screen flex overflow-hidden">
        <Sidebar links={linkElements} />
        <main>{children}</main>
      </body>
    </html>
  );
}
