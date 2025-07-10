import { configureStore } from '@reduxjs/toolkit'
import cardSlice  from './Slices/CardSlice'

export const store = configureStore({
  reducer: {
    cardData:cardSlice
  },
})