import {axiosService} from "./axios.service";
import {urls} from "../config/urls";


export const charactersService = {
    getAll: (page)=>axiosService(`${urls.character}/?page=${page}`).then(response => response.data)
}
