import { configureStore } from "@reduxjs/toolkit";
import cartreducer from "../utils/cartSlice"

const appStore=configureStore({
    reducer:{
        cart:cartreducer
    }
});

export default appStore;