import { configureStore } from '@reduxjs/toolkit'

import loginSlice from "./auth/loginSlice"
import registerSlice from './auth/registerSlice'
import examsSlice from './exams/examsSlice'
import lessonsSlice from './lessons/lessonsSlice'

export const store = configureStore({
    reducer: {
        register: registerSlice,
        login: loginSlice,
        exams: examsSlice,
        lessons: lessonsSlice
    },
})