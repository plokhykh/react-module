import {axiosUsersService} from "./axiosUsers.service";
import {usersURL} from "../config/urls";

export const usersService = {
    getAll: () => axiosUsersService.get(usersURL.users).then(response => response.data)
}
