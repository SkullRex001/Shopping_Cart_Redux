import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    product : [],
    pending : true,
    error : false
}

//thunk 
export const fetchProduct = createAsyncThunk('produt/fetch', async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const product = await res.json()
    return product
})

export const productSlice = createSlice({
    name: 'counter',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.product = action.payload;
            state.pending = false
        }).addCase(fetchProduct.pending, (state, action) => {
            state.pending = true
        }).addCase(fetchProduct.rejected, (state, action) => {
            state.error = action.error
            state.pending = false
        })
    }
})


// export const { } = productSlice.actions

export default productSlice.reducer