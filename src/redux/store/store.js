import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../Reducer/index"

const store = configureStore ({
    reducer: {
        cart: CartReducer
    }
})

export default store