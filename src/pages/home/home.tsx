import LoginForm from "@/components/login-form/login-form";
import RegisterForm from "@/components/register-form/register-form";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import styles from "@/pages/home/home.module.css";
import DepositForm from "@/components/wallet/deposit-form/deposit-form";
import TransferForm from "@/components/wallet/transfer-form/transfer-form";
import { AuthHOC } from "@/layouts/auth-hoc/auth-hoc";
import Details from "@/components/wallet/details/details";

export function Home() {
  const handleTransfer = (data) => {
    console.log({ ["transfer form"]: data });
  };

  const handleDeposit = (data) => {
    console.log({ ["deposit form"]: data });
  };

  return (
    <section className={styles.home}>
      <Card className={styles.card}>
        <AuthHOC>
          <CardHeader className="flex flex-row justify-between align-middle">
            <CardTitle>Coolest Wallet</CardTitle>
          </CardHeader>
          <article>
            <Details />
            <DepositForm onSubmit={handleDeposit} />
            <TransferForm onSubmit={handleTransfer} />
          </article>
        </AuthHOC>
      </Card>
    </section>
  );
}
