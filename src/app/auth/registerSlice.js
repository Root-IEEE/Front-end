import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  loading: false,
  errorMsg: "",
  registerStep: 1,
  registerForm: {}
}

export const registerThunk = createAsyncThunk(
  'auth/register/registerThunk',
  async (payload, { rejectWithValue }) => {
    try {
      const data = await axios.post('http://routes.puiux.org/api/register', payload)
      return data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  })





export const registerSlice = createSlice({
  name: 'auth/register',
  initialState,
  reducers: {
    setErrorMsg: (state, action) => {
      state.errorMsg = action.payload
    }
  },
  extraReducers: {
    //registerThunk
    [registerThunk.pending]: state => {
      state.loading = true
      state.errorMsg = ""
    },
    [registerThunk.fulfilled]: (state, action) => {
      state.data = action?.payload?.data
      state.loading = false
    },

    [registerThunk.rejected]: (state, action) => {
      state.apiErrors = action.payload
      state.loading = false
    },
  }
})

export const {
  setRegisterStep,
  setRegisterForm,
  setErrorMsg
} = registerSlice.actions

export default registerSlice.reducer
