import axios from "axios";
import baseURL from "../config/urls";


export const axiosCarService = axios.create({baseURL});
