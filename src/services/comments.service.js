import {axiosUsersService} from "./axiosUsers.service";
import {usersURL} from "../config/urls";

export const commentsService = {
    getAll: () => axiosUsersService.get(usersURL.comments).then(response => response.data)
}
