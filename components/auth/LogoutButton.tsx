"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export const LogoutButton = () => {
  const handleLogout = () => {
    signOut({
      callbackUrl: "/", // redirect after logout (home page or login page)
    });
  };

  return (
    <Button
      variant="destructive"
      className="w-full flex items-center gap-2"
      onClick={handleLogout}
    >
      <LogOut className="w-4 h-4" />
      Logout
    </Button>
  );
};
