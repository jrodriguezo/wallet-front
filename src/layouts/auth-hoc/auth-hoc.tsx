import LoginForm from "@/components/login-form/login-form";
import RegisterForm from "@/components/register-form/register-form";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import styles from "@/pages/home/home.module.css";

export function AuthHOC({ children }: any) {
  const [isLogin, setIsLogin] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleAuth = () => {
    setIsLogin((prev) => !prev);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticated(true);
    console.log("ey");
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
        {isLogin ? <LoginForm onSubmit={handleLogin} /> : <RegisterForm />}
      </Card>
    </section>
  );
}
