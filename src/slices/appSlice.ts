import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CurrencyState {
    date: string,
    base: string,
    rates: object,
    isLoading: boolean,
}

// Define the initial state using that type
const initialState: CurrencyState = {
    date: '---',
    base: '---',
    rates: {'--': '--'},
    isLoading: false,
}

export const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<CurrencyState>) => {
            if (!action.payload) return;

            state.date = action.payload.date;
            state.base = action.payload.base;
            state.rates = action.payload.rates;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setData, setLoading } = currencySlice.actions

export default currencySlice.reducer