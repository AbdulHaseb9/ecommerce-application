import React from "react";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      className={twMerge(
        classNames({
          "bg-blue-500": true,
          "text-white": true,
          "px-4": true,
          "py-2": true,
          rounded: true,
          "hover:bg-blue-600": true,
          "focus:outline-none": true,
        }),
        className
      )}
    >
      {children}
    </button>
  );
};
