import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import covidApi from '../api/covidApi'

export const getWorld = createAsyncThunk(
    'all/getWorld',
    async () => {
        const worldCovid = await covidApi.getWorld()
        return worldCovid
    }
)

const WorldStatusSlice = createSlice({
    name: 'all',
    initialState: {
        list: [],
        status: null
    },
    extraReducers: {
        [getWorld.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getWorld.fulfilled]: (state, { payload }) => {
            state.status = 'success'
            state.list = payload
        },
        [getWorld.rejected]: (state, action) => {
            state.status = 'failed'
        },
    }
})

export default WorldStatusSlice.reducer