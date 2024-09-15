"use client";
// pages/index.tsx
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../../components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../../../components/ui/card";
import { formSchema } from "../schema";

const Login: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: unknown) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md flex flex-col gap-4"
    >
      <Card>
        <CardHeader>
          <CardTitle>Login to Your Account</CardTitle>
          <CardDescription>
            Enter your email and password to login
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label>Email</label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input {...field} placeholder="m@example.com" />
              )}
            />
            {errors.email && <p>{errors.email.message?.toString()}</p>}
          </div>

          <div>
            <Controller
              name="flow"
              control={control}
              render={({ field }) => (
                <Input {...field} type="hidden" value="signin" />
              )}
            />
          </div>

          <div>
            <label>Password</label>
            <Controller
              name="password"
              control={control}
              render={({ field }) => <Input {...field} type="password" />}
            />
            {errors.password && <p>{errors.password.message?.toString()}</p>}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <button type="submit" className="w-full">
            Login
          </button>
          <a
            href="/forgot-password"
            className="text-sm text-center text-blue-600 hover:underline mt-4"
          >
            Forgot password?
          </a>
        </CardFooter>
      </Card>
    </form>
  );
};

export default Login;
