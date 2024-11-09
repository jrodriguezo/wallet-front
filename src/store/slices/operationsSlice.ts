import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  DepositFormData,
  TransferFormData,
} from "@/models/interface/form.interface";

interface OperationsState {
  balance: number;
  transactions: Array<{ type: string; amount: number; toUser?: string }>;
}

const initialState: OperationsState = {
  balance: 0,
  transactions: [],
};

const operationsSlice = createSlice({
  name: "operations",
  initialState,
  reducers: {
    deposit: (state, action: PayloadAction<DepositFormData>) => {
      const { amount } = action.payload;
      state.balance += Number(amount);
      state.transactions.push({ type: "deposit", amount });
    },
    transfer: (state, action: PayloadAction<TransferFormData>) => {
      const { amount, toUser } = action.payload;
      if (state.balance >= amount) {
        state.balance -= amount;
        state.transactions.push({ type: "transfer", amount, toUser });
      } else {
        console.error("Insufficient balance for transfer");
      }
    },
  },
});

export const { deposit, transfer } = operationsSlice.actions;

export default operationsSlice.reducer;
