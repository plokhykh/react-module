import {axiosService} from "./axios.service";

import {urls} from "../configs/urls";

export const postsService = {
    getAll: () => axiosService.get(urls.posts).then(response => response.data),
    getById: (id) => axiosService.get(`${urls.posts}/${id}`).then(response => response.data),
    getPostComments: (id) => axiosService.get(`${urls.posts}/${id}/comments`).then(response => response.data)
}
