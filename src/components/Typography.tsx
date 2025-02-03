import React from "react";

interface TypographyProps {
  children: React.ReactNode;
}

export const Typography: React.FC<TypographyProps> = ({ children }) => {
  return <div>{children}</div>;
};
