import { GET_CATEGORIES } from "../constants/CategoryConstants";




export const getCategoriesReducers=(state={state:[]},action)=>{
    switch (action.type) {
        case GET_CATEGORIES:
            if(action.payload){
                return{
                    ...state,
                    categories:action.payload
                }
            }
        default:
            return state;
    }
}