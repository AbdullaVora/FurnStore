import {createSlice} from "@reduxjs/toolkit";
import Home from "../../data/Home";
    
const initialState = {
    Home: Home
}

const HomeSlice = createSlice({
    name: "Home",
    initialState,
    reducers: {}
})

export default HomeSlice.reducer;