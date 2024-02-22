import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload)
    },
    removeProduct: (state, action) => {
       return state.filter((item, index)=> index !== action.payload)
        //filter does not modify an array , it returns a new modified array
      }
  },
})

export const {addProduct , removeProduct} = cartSlice.actions

export default cartSlice.reducer