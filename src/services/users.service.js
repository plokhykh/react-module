import {axiosService} from "./axios.service";

import {urls} from "../configs/urls";

export const usersService = {
    getAll: () => axiosService.get(urls.users).then(response => response.data),
    getById: (id) => axiosService.get(`${urls.users}/${id}`).then(response => response.data),
    getUserPosts: (id) => axiosService.get(`${urls.users}/${id}/posts`).then(response => response.data),
    getUserAlbums: (id) => axiosService.get(`${urls.users}/${id}/albums`).then(response => response.data)
}
