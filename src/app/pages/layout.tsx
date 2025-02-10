import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "App",
  description: "app description",
};

export default function componentName({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <body>
        <main>{children}</main>
      </body>
    </>
  );
}
