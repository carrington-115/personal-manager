import { Button } from "@/components/ui/button";
import { Search, Settings, User } from "lucide-react";
import React from "react";

export default function componentName() {
  return (
    <>
      <header
        className="w-full flex flex-row justify-between items-center pt-10 px-20"
        style={{ marginBottom: "10px" }}
      >
        <div className="w-1/3" style={{ width: "45%" }}>
          <button
            className="flex flex-row gap-10 w-full px-5 py-3"
            style={{
              backgroundColor: "#F3EDF7",
              width: "100%",
              padding: "10px 16px",
              borderRadius: "10px",
            }}
          >
            <Search /> <p>Search</p>
          </button>
        </div>
        <div className="flex flex-row gap-10 items-center w-1/4 ">
          <Button variant={"secondary"} size={"icon"}>
            <Settings />
          </Button>
          <Button variant={"secondary"} size={"icon"}>
            <User />
          </Button>
        </div>
      </header>
    </>
  );
}
