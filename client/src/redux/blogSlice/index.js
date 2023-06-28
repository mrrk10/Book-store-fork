import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  details:[]
  // _id: '',
  // fullname:'',
  // email:'',
  // token:''
}

export const blogSlice = createSlice({
  name: 'blogDetails',
  initialState,
  reducers: {
    setBlogDetails: (state, action) => {
      state.details=action.payload
      // console.log(action.payload)
      // const{_id,fullname,email,token}=action.payload
      // state._id = _id,
      // state.fullname=fullname,
      // state.email=email,
      // state.token=token
    },
  },
})

export const { setBlogDetails } = blogSlice.actions

export default blogSlice.reducer