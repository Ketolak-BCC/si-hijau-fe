import React from "react";
import { SidebarProvider } from "@/shared/components/ui/sidebar";
import SidebarDashboard from "@/shared/components/Sidebar";

interface layoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: layoutProps) => {
  return (
    <SidebarProvider>
      <SidebarDashboard />
      <main className="flex-1">{children}</main>
    </SidebarProvider>
  );
};

export default layout;
