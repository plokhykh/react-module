import {axiosCarService} from "./axiosCar.service";
import {urls} from "../config/urls";


export const carsService = {
    getAll: () => axiosCarService.get(urls.cars).then(response => response.data),
    updateById: (id, car)=> axiosCarService.patch(`${urls.cars}/${id}`, car)
}
