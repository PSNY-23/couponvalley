"use client";

import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
export const GoogleAuthButton = () => (
  <Button className='w-full' variant='outline' onClick={() => signIn("google", { redirectTo: "/dashboard" })}>
    {" "}
    <FcGoogle className='mr-2 h-5 w-5' /> Continue with Google
  </Button>
);
