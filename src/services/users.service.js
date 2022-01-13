import {urls} from "../config";

const getAll = () => {
    return fetch(urls.users)
        .then(data => data.json());
}

const getById = (id) => {
    return fetch(`${urls.users}/${id}`)
        .then(data => data.json());
}

export const userServices = {
    getAll,
    getById
}
