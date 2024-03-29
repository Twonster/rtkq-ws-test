import { configureStore } from '@reduxjs/toolkit'
import { appApi } from './services/ApiService'
import tickerSlice from './slices/tickersSlice'

const store = configureStore({
  reducer: {
    [tickerSlice.name]: tickerSlice.reducer,
    [appApi.reducerPath]: appApi.reducer
  },
  middleware: (middleware) => middleware().concat(appApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export default store
