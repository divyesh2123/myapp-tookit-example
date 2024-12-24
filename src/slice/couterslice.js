import { createSlice } from '@reduxjs/toolkit'

const initialState = {
        counter:0
}

const couterslice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
        inc : (state,payload)=>{

            state.counter = state.counter+1;
        },

        dec : (state,payload)=>{

            state.counter = state.counter-1;
        }

  }
});

export const {inc,dec} = couterslice.actions

export default couterslice.reducer