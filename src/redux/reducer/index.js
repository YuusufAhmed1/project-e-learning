import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({

    name: "cart",

    initialState: {
        cartItem: []
    },


    reducers: {


        addToCart: (state, action) => {

            const exist = state.cartItem.find(
                item => item.id === action.payload.id
            );


            if (exist) {

                exist.quantity += 1;

            } else {

                state.cartItem.push({
                    ...action.payload,
                    quantity: 1
                });

            }

        },



        removeFromCart: (state, action) => {

            state.cartItem = state.cartItem.filter(
                item => item.id !== action.payload
            )

        }
    }


})


export const { addToCart, removeFromCart} = cartSlice.actions;



export default cartSlice.reducer;