import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ErrorState {
    message?: string,
    isError: boolean,
}

const initialState: ErrorState = {
    message: '',
    isError: false,
}

export const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        setError: (state, action: PayloadAction<ErrorState>) => {
            state.isError = action.payload.isError;

            if(action.payload.message) state.message = action.payload.message;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setError } = errorSlice.actions

export default errorSlice.reducer