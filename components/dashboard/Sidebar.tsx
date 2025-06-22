"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={cn(
        "h-screen bg-muted border-r shadow-md flex flex-col transition-all duration-300 ease-in-out",
        open ? "w-64" : "w-16"
      )}
    >
      {/* Top section - toggle button */}
      <div className="flex items-center justify-end md:justify-center p-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden"
        >
          {open ? <X className="w-5 h-5 text-foreground bg-red-600" /> : <Menu className="w-5 h-5 text-foreground bg-red-600" />}
        </Button>
      </div>

      {/* Avatar */}
      <div className="flex items-center justify-center py-4">
        <Avatar className="w-10 h-10">
          <AvatarImage src="/user.png" alt="User" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>

      {/* Nav links */}
      {open && (
        <nav className="mt-4 flex flex-col space-y-2 px-4">
          <Button variant="ghost" className="justify-start w-full">
            Dashboard
          </Button>
          <Button variant="ghost" className="justify-start w-full">
            Settings
          </Button>
          <Button variant="ghost" className="justify-start w-full">
            Profile
          </Button>
        </nav>
      )}
    </div>
  );
};
