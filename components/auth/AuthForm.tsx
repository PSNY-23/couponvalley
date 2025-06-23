"use client";

// Library imports
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// UI Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

// Auth components
import { Separator } from "@/components/auth/Separator";
import { FormError } from "@/components/auth/FormError";
import { FormSuccess } from "@/components/auth/FormSuccess";
import { GoogleAuthButton } from "@/components/auth/GoogleAuthButton";
import { GithubAuthButton } from "@/components/auth/GithubAuthButton";

// Schemas
const loginSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  name: z.string().optional(),
});

const signupSchema = loginSchema.extend({
  name: z.string().min(2, "Name must be at least 2 characters"),
});

export const AuthForm = ({
  initialMode = "login",
}: {
  initialMode?: "login" | "signup";
}) => {
  const [mode, setMode] = useState<"login" | "signup">(initialMode);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");

  const schema = mode === "login" ? loginSchema : signupSchema;

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (data: z.infer<typeof schema>) => {
    try {
      setFormError("");
      setFormSuccess("");

      // Fake API delay
      await new Promise((res) => setTimeout(res, 1000));

      setFormSuccess(`${mode === "login" ? "Login" : "Signup"} successful!`);
      console.log("Submitted data:", data);
    } catch {
      setFormError("Something went wrong. Please try again.");
    }
  };

  return (
    <Card className='w-full max-w-md mx-auto p-6 border shadow-xl rounded-2xl'>
      <CardHeader>
        <CardTitle className='text-2xl text-center font-bold'>
          {mode === "login" ? "Login to your account" : "Create an account"}
        </CardTitle>
      </CardHeader>

      <CardContent className='space-y-6'>
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
            {mode === "signup" && (
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder='Your name' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type='email' placeholder='you@example.com' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type='password' placeholder='******' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormError message={formError} />
            <FormSuccess message={formSuccess} />

            <Button
              type='submit'
              disabled={isSubmitting}
              className='w-full transition-all duration-200 bg-foreground text-white cursor-pointer'
            >
              {isSubmitting
                ? "Submitting..."
                : mode === "login"
                ? "Login"
                : "Sign Up"}
            </Button>
          </form>
        </Form>

        <Separator label='OR' />

        <GoogleAuthButton />
        <GithubAuthButton />

        <p className='text-center text-sm'>
          {mode === "login"
            ? "Don't have an account?"
            : "Already have an account?"}
          <button
            type='button'
            onClick={() => setMode(mode === "login" ? "signup" : "login")}
            className='ml-2 text-blue-600 hover:text-blue-700 font-medium transition-all underline-offset-2 hover:underline'
          >
            {mode === "login" ? "Sign Up" : "Login"}
          </button>
        </p>
      </CardContent>
    </Card>
  );
};
