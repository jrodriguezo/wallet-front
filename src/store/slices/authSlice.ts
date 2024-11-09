import { LoginFormData } from "@/models/interface/form.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  user: LoginFormData | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginFormData>) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
  },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
