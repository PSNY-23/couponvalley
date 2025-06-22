import { AuthForm } from "@/components/auth/AuthForm";

export default function SigninPage() {
  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <AuthForm initialMode="login"/>
    </div>
  );
}
