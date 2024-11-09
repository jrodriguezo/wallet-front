import {
  Account,
  Amount,
  Email,
  Error,
  Name,
  Password,
} from "@/models/types/form.type";

export interface TransferFormData {
  toUser: Account;
  amount: Amount;
}

export interface ExtendedTransferFromData extends TransferFormData {
  fromUser: Account;
}

export interface DepositFormData {
  amount: Amount;
}

export interface LoginFormData {
  email: Email;
  password: Password;
}

export interface RegisterFormData extends LoginFormData {
  name: Name;
}

export interface RegisterFormProps {
  onSubmit: (data: RegisterFormData) => void;
}

export interface LoginFormProps {
  onSubmit: (data: LoginFormData) => void;
}

export interface TransferFormProps {
  onSubmit: (data: TransferFormData) => void;
  error: Error;
}

export interface DepositFormProps {
  onSubmit: (data: DepositFormData) => void;
  error: Error;
}
