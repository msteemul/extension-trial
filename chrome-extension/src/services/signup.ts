import axios from "axios";

import { BACKEND_HOST } from "../keys/keys";
import { SignupFormProps } from "../types";

//SIGNUP
export const signup = async ({name, email, password}:SignupFormProps) =>{
    try{
         const response = await axios.post(`${BACKEND_HOST}/signup`, {
            name,
            email,
            password
         })
         return response.data

    }catch (e:any) {
        return {
          error: e.response?.data,
        }
      }
}