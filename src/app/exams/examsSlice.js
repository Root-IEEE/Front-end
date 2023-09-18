import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    apiErrors: [],
    exams: [],
};

export const getExamsThunk = createAsyncThunk(
    "exams/getExams",
    async (_, { rejectWithValue }) => {
        try {

            const data = await axios.get("http://routes.puiux.org/api/exams");

            return data.data;
        } catch (error) {
            return rejectWithValue(error.response);
        }
    }
);

export const examsSlice = createSlice({
    name: "exams",
    initialState,
    reducers: {},
    extraReducers: {
        [getExamsThunk.pending]: (state) => {
            state.loading = true;
        },

        [getExamsThunk.fulfilled]: (state, action) => {
            state.exams = action?.payload?.data;
            state.loading = false;
        },
    },
});


export default examsSlice.reducer;
