import { configureStore } from '@reduxjs/toolkit'

import masterBarangReducer from './slices/masterBarangSlice'

export const store = configureStore({
  reducer: {
    masterBarang: masterBarangReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
