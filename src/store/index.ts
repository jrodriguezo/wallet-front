import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/store/slices/authSlice";
import operationsReducer from "@/store/slices/operationsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    operations: operationsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
