import React from "react";

interface layoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: layoutProps) => {
  return (
    <div className="flex-1">
      <main>{children}</main>
    </div>
  );
};

export default layout;
