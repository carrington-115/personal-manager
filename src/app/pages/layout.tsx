import { Metadata } from "next";
import React from "react";
import "../globals.css";

export const metadata: Metadata = {
  title: "App",
  description: "app description",
};

export default function componentName({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
