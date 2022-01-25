import {axiosService} from "./axios.service";
import {urls} from "../config/urls";


export const episodesService = {
    getAll: (page)=>axiosService(`${urls.episode}/?page=${page}`).then(response => response.data)
}
