import { createSlice } from "@reduxjs/toolkit";
const counterSlice=createSlice({
    name:'counter',
    initialState:'',
    reducers:{
        login:(state,uname)=>{
            state=uname
        },
        logout:(state)=>{
            state=''
        }
    }
})
export const {login,logout}= counterSlice.actions
export default counterSlice