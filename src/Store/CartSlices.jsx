import { createSlice } from "@reduxjs/toolkit";

const initialState={

    moviefav:[]
};

const CartSlices=createSlice({
    name:'Cart',
    initialState,
    reducers:{
        add(state,action){
          const newdata=action.payload
          const existdata=state.moviefav.find(item=>item.imdbID===newdata.imdbID)
          if(existdata===undefined)
           { 
            state.moviefav.push(action.payload)
        }
        else{
            alert(" Already exist that Movie on Fav")
        }
        },
        remove(state,action){
           return state.moviefav.filter(item =>item.imdbID !==action.payload)
        },
    }
})


export const {add,remove} =CartSlices.actions;
export default CartSlices.reducer;