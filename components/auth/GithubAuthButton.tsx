'use client'
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";



export const GithubAuthButton = () => (
  <Button className="w-full " variant="outline" onClick={() => signIn("google", { redirectTo: "/dashboard" })}>
    <FaGithub className="mr-2 h-5 w-5" /> Continue with GitHub
  </Button>
);
