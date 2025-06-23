"use client";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { UserDropdown } from "./UserDropdown";

export const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white border-b-2">
      <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
        <Menu className="w-5 h-5" />
      </Button>
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <UserDropdown />
    </header>
  );
};
