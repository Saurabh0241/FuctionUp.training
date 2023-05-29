import { configureStore } from "@reduxjs/toolkit";
import CartSlices from "./CartSlices";
import MovieSlices from "./MovieSlices";

const store =configureStore({
    reducer:{
        Cart: CartSlices, 
        MovieCart:MovieSlices
    }
});
export default store;