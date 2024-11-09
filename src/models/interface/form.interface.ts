import { Amount } from "@/models/types/form.type";

export interface TransferFormData {
  fromUser: string;
  toUser: string;
  amount: number;
}

export interface DepositFormData {
  amount: Amount;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData extends LoginFormData {
  name: string;
}

export interface RegisterFormProps {
  onSubmit: (data: RegisterFormData) => void;
}

export interface LoginFormProps {
  onSubmit: (data: LoginFormData) => void;
}

export interface TransferFormProps {
  onSubmit: (data: TransferFormData) => void;
}

export interface DepositFormProps {
  onSubmit: (data: DepositFormData) => void;
}
