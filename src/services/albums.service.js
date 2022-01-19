import {axiosService} from "./axios.service";

import {urls} from "../configs/urls";

export const albumsService = {
    getAlbumPhotos: (id) => axiosService.get(`${urls.albums}/${id}/photos`).then(response => response.data)
}
