import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import cartReducer from "./reducers/cartReducer";

export default configureStore({
  reducer: {
    userReducer: userReducer,
    cartReducer: cartReducer,
  },
});
