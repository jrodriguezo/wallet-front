import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  LoginFormData,
  LoginFormProps,
} from "@/models/interface/form.interface";

function LoginForm({ onSubmit }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const handleFormSubmit: SubmitHandler<LoginFormData> = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Type your email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message?.toString()}
              </span>
            )}
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              placeholder="Type your password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message?.toString()}
              </span>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button type="submit">Login</Button>
      </CardFooter>
    </form>
  );
}

export default LoginForm;
