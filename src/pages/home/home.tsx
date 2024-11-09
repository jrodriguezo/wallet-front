import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import styles from "@/pages/home/home.module.css";
import DepositForm from "@/components/wallet/deposit-form/deposit-form";
import TransferForm from "@/components/wallet/transfer-form/transfer-form";
import { AuthHOC } from "@/layouts/auth-hoc/auth-hoc";
import Details from "@/components/wallet/details/details";
import {
  DepositFormData,
  TransferFormData,
} from "@/models/interface/form.interface";
import { deposit } from "@/store/slices/operationsSlice";
import { useDispatch } from "react-redux";

export function Home() {
  const dispatch = useDispatch();
  const handleTransfer = (data: TransferFormData) => {
    console.log({ ["transfer form"]: data });
  };

  const handleDeposit = (data: DepositFormData) => {
    console.log({ ["deposit form"]: data });
    dispatch(deposit(data));
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
