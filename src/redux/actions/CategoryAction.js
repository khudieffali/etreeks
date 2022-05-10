import { BASE_URL } from "../../api/ApiConfig"
import { GET_CATEGORIES } from "../constants/CategoryConstants"




export const getCategories=()=>async(dispatch,getState)=>{
    const categories=await (await fetch(`${BASE_URL}api/Category`)).json()
    dispatch({
        type:GET_CATEGORIES,
        payload:categories
    })
}