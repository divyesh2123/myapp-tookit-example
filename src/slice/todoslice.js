import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    return res?.json();
});

const initialState= {
    initialState: false,
    data: [],
    isError: false
}

const todoslice = createSlice({
  name: 'fetchTodos',
  initialState,
  extraReducers: (builder) => {

    builder.addCase(fetchTodos.pending, (state, action) => {
        state.isLoading = true;
    })

    builder.addCase(fetchTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
    })
    builder.addCase(fetchTodos.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
    })

  }
});

export const {} = todoslice.actions

export default todoslice.reducer