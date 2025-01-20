// import { createSlice } from "@reduxjs/toolkit";
// import Collection from "../../data/Collection";

// const initialState = {
//     Collection: Collection,
//     Cart: []
// };

// const CollectionSlice = createSlice({
//     name: "Collection",
//     initialState,
//     reducers: {
//         addProductToCart(state, action) {
//             // Find the product by ID
//             const product = Collection.product.filter(product => product.id === action.payload);

//             // Check if product already exists in cart
//             const existingItemIndex = state.Cart.findIndex(item => {
//                 const parsedItem = JSON.parse(item);
//                 return parsedItem[0].id === action.payload;
//             });

//             if (existingItemIndex !== -1) {
//                 // If product exists, increment its quantity
//                 const existingItem = JSON.parse(state.Cart[existingItemIndex]);
//                 existingItem[0].quantity = (existingItem[0].quantity || 1) + 1;
//                 state.Cart[existingItemIndex] = JSON.stringify(existingItem);
//             } else {
//                 // If product doesn't exist, add it with quantity 1
//                 const newProduct = product.map(item => ({
//                     ...item,
//                     quantity: 1
//                 }));
//                 console.log(newProduct);

//                 state.Cart.push(JSON.stringify(newProduct));
//             }
//         },
//         removeProductFromCart(state, action) {
//             console.log("home: "+ action.payload);

//             state.Cart = state.Cart.filter(product => {
//                 const parsedProduct = JSON.parse(product)[0]; // Parse and access the first object in the array
//                 return parsedProduct.id !== action.payload;
//             });
//         },
//         updateProductQuantity(state, action) {
//             const { id, quantity } = action.payload;

//             // Find the product by parsing the stored JSON strings
//             const productIndex = state.Cart.findIndex(item => {
//                 const parsedItem = JSON.parse(item);  // Parse the JSON string

//                 return parsedItem[0].id === id;  // Assuming the item is an array, access the first element
//             });

//             if (productIndex !== -1) {
//                 // Parse the product, update its quantity, and re-stringify it
//                 const product = JSON.parse(state.Cart[productIndex]);
//                 product[0].quantity = quantity;

//                 // If the quantity is 0, remove the product from the cart
//                 if (quantity === 0) {
//                     state.Cart.splice(productIndex, 1); // Remove from the array
//                 } else {
//                     // Update the cart with the modified product
//                     state.Cart[productIndex] = JSON.stringify(product);  // Re-stringify it
//                 }
//             }
//         }
//     }
// });

// export const { addProductToCart, removeProductFromCart, updateProductQuantity } = CollectionSlice.actions;
// export default CollectionSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import Collection from "../../data/Collection";
import Home from "../../data/Home"

const initialState = {
    Collection: Collection,
    Home: Home,
    Cart: [],
    WishList: []
};

const findProduct = (productId) => {
    // Check each collection in order
    const collections = [
        Collection?.product || [],
        Home?.arrival || [],
        Home?.product || []
    ];

    for (const collection of collections) {
        const found = collection.find(product => product.id === productId);
        if (found) return found;
    }
    return null;
};

const CollectionSlice = createSlice({
    name: "Collection",
    initialState,
    reducers: {
        addProductToCart(state, action) {


            // Find the product
            const product = findProduct(action.payload);

            if (!product) {
                console.error(`Product with ID ${action.payload} not found.`);
                return;
            }

            // Check if product already exists in cart
            const existingItemIndex = state.Cart.findIndex(item => {
                const parsedItem = JSON.parse(item); // Parse the JSON string
                return parsedItem.id === action.payload; // Check if the IDs match
            });

            if (existingItemIndex !== -1) {
                // If product exists, increment its quantity
                const existingItem = JSON.parse(state.Cart[existingItemIndex]);
                existingItem.quantity = (existingItem.quantity || 1) + 1; // Increment quantity
                state.Cart[existingItemIndex] = JSON.stringify(existingItem); // Update in cart
            } else {
                // If product doesn't exist, add it with quantity 1
                const newProduct = { ...product, quantity: 1 }; // Add quantity property
                state.Cart.push(JSON.stringify(newProduct)); // Add to cart
            }
        },
        removeProductFromCart(state, action) {
            console.log("Removing product with ID: " + action.payload);

            state.Cart = state.Cart.filter(product => {
                const parsedProduct = JSON.parse(product); // Parse the JSON string
                return parsedProduct.id !== action.payload; // Remove product if IDs match
            });
        },
        updateProductQuantity(state, action) {
            const { id, quantity } = action.payload;

            // Find the product by parsing the stored JSON strings
            const productIndex = state.Cart.findIndex(item => {
                const parsedItem = JSON.parse(item); // Parse the JSON string
                return parsedItem.id === id; // Compare IDs
            });

            if (productIndex !== -1) {
                // Parse the product, update its quantity, and re-stringify it
                const product = JSON.parse(state.Cart[productIndex]);
                product.quantity = quantity;

                // If the quantity is 0, remove the product from the cart
                if (quantity === 0) {
                    state.Cart.splice(productIndex, 1); // Remove from the array
                } else {
                    // Update the cart with the modified product
                    state.Cart[productIndex] = JSON.stringify(product); // Re-stringify it
                }
            }
        },
        addToWishList(state, action) {
            // Find the product by ID
            const product = findProduct(action.payload);

            if (!product) {
                console.error(`Product with ID ${action.payload} not found.`);
                return;
            }

            // Check if product already exists in the WishList
            const existingItemIndex = state.WishList.findIndex(item => {
                const parsedItem = JSON.parse(item); // Parse the JSON string
                return parsedItem.id === action.payload; // Check if the IDs match
            });

            if (existingItemIndex === -1) {
                console.log(product);
                // If product doesn't exist in the WishList, add it
                state.WishList.push(JSON.stringify(product)); // Add the product as a JSON string
                console.log(state.WishList);
            } else {
                console.log(`Product with ID ${action.payload} is already in the WishList.`);
            }

        },
        removeFromWishList(state, action) {
            state.WishList = state.WishList.filter(product => {
                const parsedProduct = JSON.parse(product); // Parse the JSON string
                return parsedProduct.id !== action.payload; // Remove product if IDs match
            });

        }

    }
});

export const { addProductToCart, removeProductFromCart, updateProductQuantity, addToWishList, removeFromWishList } = CollectionSlice.actions;
export default CollectionSlice.reducer;
