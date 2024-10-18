import axios from "axios";
import ApiManager from "./ApiManager";

export const userLogin = async (email: string, password: string, token: string) => {
    try {
        const result = await ApiManager("/login",{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            data: data
        })
    } catch (error) {
        return error.response.data
    }
}