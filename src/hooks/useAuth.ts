import { useDispatch, useSelector } from "react-redux";
import { login } from "@/store/slices/authSlice";
import {
  LoginFormData,
  RegisterFormData,
} from "@/models/interface/form.interface";
import { RootState } from "@/store";
import { useState } from "react";

export const useAuth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleAuth = () => {
    setIsLogin((prev) => !prev);
  };

  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const handleLogin = (data: LoginFormData) => {
    dispatch(login(data));
  };

  const handleRegister = (data: RegisterFormData) => {
    // do nothing, no backend available
    console.log({ ["register form"]: data });
  };

  return {
    isLogin,
    isAuthenticated,
    handleLogin,
    handleRegister,
    handleAuth,
  };
};
