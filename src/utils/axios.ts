import axios from "axios"
import { API_KEY, API_URL } from "../config/fetch"


const fetching = async (urlParams?: string) => {
    try {
        const response = await axios.get(`${API_URL}?api_key=${API_KEY}${
        typeof urlParams !=='undefined' && urlParams?.length > 0
        ? urlParams 
        : ''}`)        
        return response.data
    } catch (error) {
        return error
    }

}


export default fetching