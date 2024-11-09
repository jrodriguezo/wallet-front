import LoginForm from "@/components/login-form/login-form";
import RegisterForm from "@/components/register-form/register-form";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Props } from "@/models/props";
import { useAuth } from "@/hooks/useAuth";
import styles from "@/pages/home/home.module.css";

export function AuthHOC({ children }: Pick<Props, "children">) {
  const { isLogin, isAuthenticated, handleLogin, handleRegister, handleAuth } =
    useAuth();

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
