import React from "react";

interface calendarWidgetProps {
  title: string;
  startDate: Date;
  endDate: Date;
  description: string;
  status: "completed" | "pending" | "in-progress";
}

export default function componentName({
  title,
  startDate,
  endDate,
  description,
  status,
}: calendarWidgetProps) {
  return (
    <>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <div>
          <div />
          <div>
            <p>{startDate.toLocaleDateString()}</p>
            <p>{endDate.toLocaleDateString()}</p>
          </div>
        </div>
        <p>{status}</p>
      </div>
    </>
  );
}
