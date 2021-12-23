import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./reducers/ProductsReducer";
import cartReducer from "./reducers/cartReducer";

export default configureStore({
  reducer: {
    ProductsReducer: ProductsReducer,
    cartReducer: cartReducer,
  },
});
