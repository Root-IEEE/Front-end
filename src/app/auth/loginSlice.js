import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  loading: false,
  errorMsg: "",
}

export const loginThunk = createAsyncThunk(
  'login/loginThunk',
  async (payload, { rejectWithValue }) => {
    try {
      const data = await axios.post('http://routes.puiux.org/api/login', payload)
      return data
    } catch (error) {
      return rejectWithValue(error.response)
    }
  }
)

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setErrorMsg: (state, action) => {
      state.errorMsg = action.payload
    }
  },
  extraReducers: {
    // loginThunk
    [loginThunk.pending]: state => {
      state.loading = true
      state.errorMsg = ""
    },
    [loginThunk.fulfilled]: (state) => {
      state.loading = false
    },
    [loginThunk.rejected]: (state) => {
      state.loading = false
    },

  }
})


export const { setErrorMsg } = loginSlice.actions;

export default loginSlice.reducer
