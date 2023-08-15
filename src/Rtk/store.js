import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "./Slices/Products-slices";
import cartSlice from "./Slices/cart-slice";
export const store=configureStore({
    reducer:{
        products: ProductsSlice,  cart :cartSlice

    }
})