import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState={
    data:[],
    status:"idle"
}
const MovieSlicecard=createSlice({
    name:"MovieCart",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(getProducts.pending,(state,action)=>{
          state.status='Loading'
        })
        .addCase(getProducts.fulfilled,(state,action)=>{
          state.data=action.payload
          state.status='idle'
        })
        .addCase(getProducts.rejected,(state,action)=>{
          state.status='error'
        })
    }
})

export const getProducts = createAsyncThunk(  async () => {
    // const res = await fetch("https://www.omdbapi.com/?s=action&apikey=bbb5aad4&page=1");
    // const productsData = await res.json();
    // return productsData.Search;
   const data=  axios.get("https://www.omdbapi.com/?s=action&apikey=bbb5aad4&page=1")
//    .then((response) => (response.Search))
//    .catch((error) => console.log(error))
const result = data.Search
return result

    
  
})

export default MovieSlicecard.reducer;
