import { configureStore } from '@reduxjs/toolkit'
import worldStatusReducer from '../slice/WorldStatusSlice'
import countryReducer from '../slice/CountrySlice'

const rootReducer = {
    all: worldStatusReducer,
    countries: countryReducer
}

const store = configureStore({
    reducer: rootReducer
})

export default store