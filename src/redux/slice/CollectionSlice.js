import { createSlice } from "@reduxjs/toolkit";
import Collection from "../../data/Collection";

const initialState = {
    Collection: Collection,
    Cart: []
};

const CollectionSlice = createSlice({
    name: "Collection",
    initialState,
    reducers: {
        addProductToCart(state, action) {
            // Find the product by ID
            const product = Collection.product.filter(product => product.id === action.payload);
            if (product) {
                state.Cart.push(JSON.stringify(product)); // Store product as a JSON string
            }
        },
        removeProductFromCart(state, action) {
            state.Cart = state.Cart.filter(product => {
                const parsedProduct = JSON.parse(product)[0]; // Parse and access the first object in the array
                return parsedProduct.id !== action.payload;
            });
        }
    }
});

export const { addProductToCart, removeProductFromCart } = CollectionSlice.actions;
export default CollectionSlice.reducer;
