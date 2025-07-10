import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  cardItem:localStorage.getItem("cardDatas")?JSON.parse(localStorage.getItem("cardDatas")) :[],
}

export const cardSlice = createSlice({
  name: 'cardData',
  initialState,
  reducers: {
    cardData: (state,action) => {
          
           const findIndex=state.cardItem.findIndex((item)=> item._id===action.payload._id)
           console.log(findIndex)
          //  
          if(findIndex >=0 ){
            state.cardItem[findIndex].cardQun++
          }
          else{
             state.cardItem.push({...action.payload,cardQun:1})
          }
    },
   
   
  },
})

// Action creators are generated for each case reducer function
export const { cardData } = cardSlice.actions

export default cardSlice.reducer