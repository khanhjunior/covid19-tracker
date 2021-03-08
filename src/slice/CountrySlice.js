import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import covidApi from '../api/covidApi'

export const getCountry = createAsyncThunk(
    'contries/getCountry',
    async () => {
        const contriesCovid = await covidApi.getCountries()
        return contriesCovid
    }
)

const CountrySlice = createSlice({
    name: 'countries',
    initialState: {
        list: [],
        status: null
    },
    extraReducers: {
        [getCountry.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getCountry.fulfilled]: (state, { payload }) => {
            state.status = 'success'
            state.list = payload
        },
        [getCountry.rejected]: (state, action) => {
            state.status = 'failed'
        },
    }
})
const { reducer } = CountrySlice

export default reducer
