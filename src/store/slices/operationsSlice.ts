import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  DepositFormData,
  ExtendedTransferFromData,
} from "@/models/interface/form.interface";
import { TransactionType } from "@/models/enums/operations.enum";
import { Amount } from "@/models/types/form.type";
import { generateWalletAddress } from "@/components/wallet/details/utils";

type type = TransactionType.DEPOSIT | TransactionType.TRANSFER;

interface OperationsState {
  address: string;
  balance: Amount;
  transactions: Array<{
    amount: string;
    from?: string;
    to?: string;
    type: type;
  }>;
  errors: { [key in TransactionType]: string };
}

const initialState: OperationsState = {
  address: generateWalletAddress("seed"),
  balance: 0,
  transactions: [],
  errors: {
    [TransactionType.DEPOSIT]: "",
    [TransactionType.TRANSFER]: "",
  },
};

const operationsSlice = createSlice({
  name: "operations",
  initialState,
  reducers: {
    deposit: (state, action: PayloadAction<DepositFormData>) => {
      const { amount } = action.payload;
      const numberAmount = Number(amount);
      const isValidAmount = numberAmount < 0;

      state.errors[TransactionType.DEPOSIT] = isValidAmount
        ? "Deposit must be possitive"
        : "";

      if (isValidAmount) return;
      state.balance += Number(amount);
      state.transactions.push({
        type: TransactionType.DEPOSIT,
        amount: amount.toString(),
      });
    },
    transfer: (state, action: PayloadAction<ExtendedTransferFromData>) => {
      const { amount, fromUser, toUser } = action.payload;
      if (state.balance >= amount) {
        state.errors[TransactionType.TRANSFER] = "";
        state.balance -= amount;
        state.transactions.push({
          amount: (-amount).toString(),
          from: fromUser,
          to: toUser,
          type: TransactionType.TRANSFER,
        });
      } else {
        state.errors[TransactionType.TRANSFER] =
          "Insufficient balance for transfer";
      }
    },
  },
});

export const { deposit, transfer } = operationsSlice.actions;

export default operationsSlice.reducer;
