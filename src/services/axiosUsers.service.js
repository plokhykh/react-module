import axios from "axios";
import {usersURL} from "../config/urls";

export const axiosUsersService = axios.create({baseURL: usersURL.baseURL});
