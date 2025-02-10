"use client";

import {
  ChevronLeft,
  ChevronRight,
  CircleCheckBig,
  Cog,
  Home,
  PanelsTopLeft,
  Plus,
  UserRoundCog,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

interface SidebarIconsProps {
  icon: React.ReactNode;
  title: string;
  link: string;
  view?: boolean;
}

const linkElements: SidebarIconsProps[] = [
  { icon: <Home />, title: "Dashboard", link: "/pages/dashboard" },
  { icon: <CircleCheckBig />, title: "Tasks", link: "/pages/tasks" },
  { icon: <PanelsTopLeft />, title: "Projects", link: "/pages/projects" },
  { icon: <UserRoundCog />, title: "Profile", link: "/pages/profile" },
  { icon: <Cog />, title: "Settings", link: "/pages/settings" },
];

export default function componentName() {
  const [sideBarLarge, setSideBarLarge] = React.useState<boolean>(false);

  return (
    <>
      <div
        className="h-screen w-1/5 flex flex-col"
        style={{
          width: sideBarLarge ? "20%" : "8%",
          backgroundColor: "#FEF7FF",
          padding: sideBarLarge ? "10px" : "20px",
          alignItems: "center",
        }}
      >
        <section
          className={`flex flex-col ${
            sideBarLarge ? "items-center" : "items-start"
          } gap-10`}
        >
          <img
            src={
              sideBarLarge ? "/images/long-logo.svg" : "/images/short-logo.svg"
            }
            alt="logo"
            style={{
              width: sideBarLarge ? "100%" : "48px",
              height: sideBarLarge ? "auto" : "48px",
            }}
          />
          <nav
            className="w-full flex flex-col gap-20"
            style={{
              marginLeft: sideBarLarge ? 20 : 0,
              alignItems: sideBarLarge ? "flex-start" : "center",
            }}
          >
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#ECE6F0",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 5,
                gap: 10,
                width: "fit-content",
                marginBottom: 12,
              }}
            >
              <Plus color="black" size={28} />
              {sideBarLarge && <p style={{ fontSize: 24 }}>Create</p>}
            </button>
            <nav className="flex flex-col" style={{ gap: 20 }}>
              {linkElements.map((linkElement, index) => (
                <LinkComponent
                  key={index}
                  {...linkElement}
                  view={sideBarLarge}
                />
              ))}
            </nav>
          </nav>
        </section>
        <div
          style={{
            width: sideBarLarge ? "100%" : "fit-content",
            justifyContent: "flex-end",
            display: "flex",
            justifySelf: "flex-end",
            marginTop: sideBarLarge ? "auto" : "20px",
          }}
        >
          <Button
            variant={"outline"}
            size={"icon"}
            onClick={() => setSideBarLarge(!sideBarLarge)}
          >
            {sideBarLarge ? <ChevronLeft /> : <ChevronRight />}
          </Button>
        </div>
      </div>
    </>
  );
}

const LinkComponent = ({ icon, title, link, view }: SidebarIconsProps) => {
  const pathname = usePathname();

  const linkStyles = {
    backgroundColor: pathname === link ? "#F3EDF7" : "#F3EDF7",
    borderRadius: 40,
    gap: 10,
    display: "flex",
    justifyContent: view ? "flex-start" : "center",
    alignItems: "center",
    padding: view ? "10px 20px" : "10px",
    width: view ? "100%" : "fit-content",
  };

  return (
    <Link href={link}>
      <div
        className={`w-full flex flex-row items-center py-2 px-4 rounded-2xl hover:bg-[#D1C4E9]-200`}
        style={linkStyles}
      >
        <>{icon}</>
        {view && title}
      </div>
    </Link>
  );
};
