import axios from "axios";
import { apiKey } from "../../public/apiKey";

export const axiosInstanceWithAPIKey = axios.create({
    baseURL: `https://api.worldnewsapi.com`,
    timeout: 1000,
    headers: {
        'x-api-key': apiKey
    }
})