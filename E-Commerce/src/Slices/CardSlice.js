import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  cardItem:localStorage.getItem("cardData")?JSON.parse(localStorage.getItem("cardData")) :[],
}

export const cardSlice = createSlice({
  name: 'cardData',
  initialState,
  reducers: {
    cardData: (state,action) => {
          // console.log(state,"13")
          // console.log(action,"14")
           const findIndex=state.cardItem.findIndex((item)=> item._id===action.payload._id)
          //  console.log(findIndex)
          //  
          if(findIndex >=0 ){
            state.cardItem[findIndex].cardQun++
          }
          else{
             state.cardItem.push({...action.payload,cardQun:1})
          }
          localStorage.setItem("cardData",JSON.stringify(state.cardItem))
    },
    
      counterData:(state,action)=>{
        //  console.log(state)
          // console.log(action)
          if(action.payload.type==="increment"){
            state.cardItem[action.payload.id].cardQun++
          }else{
            state.cardItem[action.payload.id].cardQun--
          }
      }
       
   
   
  },
})

// Action creators are generated for each case reducer function
export const { cardData ,counterData} = cardSlice.actions

export default cardSlice.reducer