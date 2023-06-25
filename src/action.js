

export const deleteItem = item =>{
   
    return{
        type:"DELETE_ITEM",
        payload: item
    }
}

export const setItems = items =>{
    
     return{
         type:"SET_ITEMS",
         payload: items
     }
 }

 export const addItem = item =>{
   
     return{
         type:"ADD_ITEM",
         payload: item
     }
 }
 

 