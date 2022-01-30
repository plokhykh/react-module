import {axiosUsersService} from "./axiosUsers.service";
import {usersURL} from "../config/urls";

export const postsService = {
    getAll: () => axiosUsersService.get(usersURL.posts).then(response => response.data)
}
