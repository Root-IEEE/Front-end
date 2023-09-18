import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    apiErrors: [],
    lessons: [],
};

export const getLessonsThunk = createAsyncThunk(
    "lessons/getLessonsThunk",
    async (_, { rejectWithValue }) => {
        try {

            const data = await axios.get("http://routes.puiux.org/api/exams");

            return data.data;
        } catch (error) {
            return rejectWithValue(error.response);
        }
    }
);

export const lessonsSlice = createSlice({
    name: "lessons",
    initialState,
    reducers: {},
    extraReducers: {
        [getLessonsThunk.pending]: (state) => {
            state.loading = true;
        },

        [getLessonsThunk.fulfilled]: (state, action) => {
            state.lessons = action?.payload?.data;
            state.loading = false;
        },
    },
});


export default lessonsSlice.reducer;
