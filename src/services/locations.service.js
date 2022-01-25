import {axiosService} from "./axios.service";
import {urls} from "../config/urls";


export const locationService = {
    getAll: (page)=>axiosService(`${urls.location}/?page=${page}`).then(response => response.data)
}
