import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
    name:"requests",
    initialState:null,
    reducers:{
        addRequests:(state,action) => action.payload,
        removeRequest:(state,action) => {
            const newArray = state.filter(r => r._id !== action.payload)  //filter each of the request, if my request.id is not equal to the id which i am getting from the payload
            return newArray  // return the new array and my state would be updated  
        }
    },
})

export const{ addRequests, removeRequest} = requestSlice.actions
export default requestSlice.reducer