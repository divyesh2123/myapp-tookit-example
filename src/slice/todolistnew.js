import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading:false,
    data:[],
    error:{}
}

const todolistnew = createSlice({
  name:'todolist',
  initialState,
  reducers: {

    requesttodo: (state,action)=>{

        state.isLoading= true;

        return state;

    },
    requesttodosuce : (state,action)=>{
        state.isLoading = false;
        state.data= action.payload;
        return state;

    },
    requesttodofail : (state,action)=>{
        state.isLoading = false;
        state.error= action.payload;
        return state;


    }

  }
});

export const {requesttodo,requesttodosuce,requesttodofail} = todolistnew.actions

export default todolistnew.reducer