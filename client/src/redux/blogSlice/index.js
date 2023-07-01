import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  details:[],
}

export const blogSlice = createSlice({
  name: 'blogDetails',
  initialState,
  reducers: {
    setBlogDetails: (state, action) => {
      state.details=action.payload
    },
  },
})

export const { setBlogDetails } = blogSlice.actions

export default blogSlice.reducer