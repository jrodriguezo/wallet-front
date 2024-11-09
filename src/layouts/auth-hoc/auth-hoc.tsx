import LoginForm from "@/components/login-form/login-form";
import RegisterForm from "@/components/register-form/register-form";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import styles from "@/pages/home/home.module.css";
import { Props } from "@/models/props";
import {
  LoginFormData,
  RegisterFormData,
} from "@/models/interface/form.interface";

export function AuthHOC({ children }: Pick<Props, "children">) {
  const [isLogin, setIsLogin] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleAuth = () => {
    setIsLogin((prev) => !prev);
  };

  const handleLogin = (data: LoginFormData) => {
    setIsAuthenticated(true);
    console.log({ ["login form"]: data });
  };

  const handleRegister = (data: RegisterFormData) => {
    console.log({ ["register form"]: data });
  };

  if (isAuthenticated) return children;

  return (
    <section className={styles.home}>
      <Card className={styles.card}>
        <CardHeader className="flex flex-row justify-between align-middle">
          <CardTitle>Coolest Wallet</CardTitle>
          <Button variant="secondary" onClick={handleAuth}>
            {isLogin ? "Register" : "Login"}
          </Button>
        </CardHeader>
        {isLogin ? (
          <LoginForm onSubmit={handleLogin} />
        ) : (
          <RegisterForm onSubmit={handleRegister} />
        )}
      </Card>
    </section>
  );
}
