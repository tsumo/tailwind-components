import React from "react";
import clsx from "clsx";

export type ToastProps = {
  message: string;
  color: "green" | "red";
};

const colorToCss: Record<ToastProps["color"], string> = {
  green: "bg-green-500",
  red: "bg-red-500",
};

export const Toast = ({ message, color }: ToastProps) => {
  return (
    <div className="flex flex-col max-w-sm m-1 shadow-md">
      <div className="rounded-t w-full border-t border-l border-r border-grey-900 p-3">
        {message}
      </div>
      <div className={clsx("rounded-b w-full h-1", colorToCss[color])} />
    </div>
  );
};
