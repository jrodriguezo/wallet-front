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
import { deposit, transfer } from "@/store/slices/operationsSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { TransactionType } from "@/models/enums/operations.enum";

export function Home() {
  const { errors, address } = useSelector(
    (state: RootState) => state.operations
  );

  const dispatch = useDispatch();
  const handleTransfer = (data: TransferFormData) => {
    dispatch(transfer({ fromUser: address, ...data }));
  };

  const handleDeposit = (data: DepositFormData) => {
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
            <DepositForm
              error={errors[TransactionType.DEPOSIT]}
              onSubmit={handleDeposit}
            />
            <TransferForm
              error={errors[TransactionType.TRANSFER]}
              onSubmit={handleTransfer}
            />
          </article>
        </AuthHOC>
      </Card>
    </section>
  );
}
