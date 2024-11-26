import { createSlice } from "@reduxjs/toolkit";
import Collection from "../../data/Collection";

const initialState = {
    Collection: Collection
};

const CollectionSlice = createSlice({
    name: "Collection",
    initialState,
    reducers: {}
});

export default CollectionSlice.reducer;
